import type { NextApiRequest, NextApiResponse } from 'next';
import { openai, pinecone } from '../../lib/clients';
import { supabase } from '../../lib/supabase';
import { AlumniProfile } from '../../types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { q } = req.query;

    if (!q || typeof q !== 'string') {
      return res.status(400).json({ error: 'Search query is required' });
    }

    try {
      const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: q,
      });
      const queryEmbedding = embeddingResponse.data[0].embedding;

      const index = pinecone.Index('alumni-profiles');
      const queryResponse = await index.query({
        vector: queryEmbedding,
        topK: 10,
        includeMetadata: true,
        filter: { score: { $gte: 0.5 } }
      });

      let profiles;
      if (queryResponse.matches.length > 0) {
        const ids = queryResponse.matches.map(match => match.id);
        const { data, error } = await supabase
          .from('alumni_profiles')
          .select('*')
          .in('id', ids);
        
        if (error) throw error;
        profiles = data;
      } else {
        const { data, error } = await supabase
          .from('alumni_profiles')
          .select('*');
        
        if (error) throw error;
        profiles = data;
      }

      const rankedResults = await rerankAndGenerateBlurbs(q, profiles);

      return res.status(200).json({ data: rankedResults });
    } catch (error) {
      console.error('Search error:', error);
      return res.status(500).json({ error: 'An error occurred during the search' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function rerankAndGenerateBlurbs(query: string, profiles: AlumniProfile[]) {
  const prompt = `
Query: "${query}"

Profiles:
${profiles.map(p => `${p.name}: ${p.role} at ${p.company}. Interests: ${p.interests.join(', ')}`).join('\n')}

For each profile, provide a relevance score from 0 to 10 and a brief explanation of why this profile might be relevant to the query. Be very lenient in your scoring, considering even loose connections. Use only the information provided in the profiles. Format your response as JSON:
[
  {
    "id": "profile_id",
    "score": 0,
    "blurb": "Explanation of potential relevance"
  },
  ...
]
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  const result = JSON.parse(completion.choices[0].message.content!);
  const rankedProfiles = result.map((item: any) => {
    const profile = profiles.find(p => p.id === item.id);
    if (profile) {
      return { 
        ...profile,  
        score: item.score, 
        blurb: item.blurb 
      };
    }
    return null;
  }).filter(Boolean);

  rankedProfiles.sort((a: { score: number }, b: { score: number }) => b.score - a.score);

  return rankedProfiles;
}
