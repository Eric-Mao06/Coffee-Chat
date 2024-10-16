import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabase';
import { generate_embedding } from '../../lib/openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { q } = req.query;

    if (!q || typeof q !== 'string') {
      return res.status(400).json({ error: 'Search query is required' });
    }

    try {
      console.log('Generating embedding for query:', q);
      const embedding = await generate_embedding(q);
      console.log('Embedding generated successfully');

      console.log('Performing Supabase query');
      const { data, error } = await supabase.rpc('match_alumni', {
        query_embedding: embedding,
        match_threshold: 0.7,
        match_count: 10,
      });

      if (error) throw error;

      console.log('Supabase query successful, returning data');
      return res.status(200).json({ data });
    } catch (error) {
      console.error('Search error:', error);
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
