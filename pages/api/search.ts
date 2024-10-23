import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabase';
import { openai } from '../../lib/clients';
import { pinecone } from '../../lib/clients';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { q } = req.query;
  if (!q || typeof q !== 'string') {
    return res.status(400).json({ error: 'Search query is required' });
  }

  try {
    const queryEmbedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: q,
    });

    const index = pinecone.Index('alumni-profiles');
    const queryResponse = await index.query({
      vector: queryEmbedding.data[0].embedding,
      topK: 10,
      includeMetadata: true
    });

    if (queryResponse.matches && queryResponse.matches.length > 0) {
      const relevancePrompt = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{
          role: "system",
          content: "You are a helpful assistant that explains why a search result is relevant to a query. Keep explanations brief and natural, focusing on the most important matching aspects."
        }, {
          role: "user",
          content: `For the search query "${q}", explain why each of these profiles is relevant (keep each explanation under 500 characters): ${queryResponse.matches.map(match => 
            `\n- ${match.metadata?.name} (${match.metadata?.role} at ${match.metadata?.company})`
          ).join('')}`
        }]
      });

      const explanations = relevancePrompt.choices[0].message.content?.split('\n').filter(line => line.trim());

      const profileIds = queryResponse.matches.map(match => match.id);
      const { data: supabaseProfiles, error: supabaseError } = await supabase
        .from('alumni_profiles')
        .select('id, linkedin_url')
        .in('id', profileIds);

      if (supabaseError) throw supabaseError;
      const linkedInUrls = new Map(
        supabaseProfiles.map(profile => [profile.id, profile.linkedin_url])
      );

      const profiles = queryResponse.matches.map((match, index) => ({
        id: match.id,
        name: match.metadata?.name || 'Unknown',
        role: match.metadata?.role || 'Unknown Role',
        company: match.metadata?.company || 'Unknown Company',
        location: match.metadata?.location || 'Unknown Location',
        interests: match.metadata?.interests || [],
        projects: match.metadata?.projects || [],
        hobbies: match.metadata?.hobbies || [],
        resume_embedding: match.metadata?.resume_embedding || null,
        linkedin_url: linkedInUrls.get(match.id) || null,
        blurb: explanations?.[index] || `Match score: ${match.score?.toFixed(2)}`,
      }));

      return res.status(200).json({
        data: profiles,
        fallback: false
      });
    }

    return res.status(200).json({
      data: [],
      fallback: false
    });

  } catch (error) {
    console.error('Search error:', error);
    return res.status(500).json({ error: 'An error occurred while searching' });
  }
}
