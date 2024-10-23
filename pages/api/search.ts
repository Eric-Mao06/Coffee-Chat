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
      const profiles = queryResponse.matches.map(match => ({
        id: match.id,
        name: match.metadata?.name || 'Unknown',
        role: match.metadata?.role || 'Unknown Role',
        company: match.metadata?.company || 'Unknown Company',
        location: match.metadata?.location || 'Unknown Location',
        interests: match.metadata?.interests || [],
        projects: match.metadata?.projects || [],
        hobbies: match.metadata?.hobbies || [],
        resume_embedding: match.metadata?.resume_embedding || null,
        blurb: `Match score: ${match.score?.toFixed(2)}`,
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
