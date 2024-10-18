import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('alumni_profiles')
        .select('*')
        .limit(2);

      if (error) throw error;

      return res.status(200).json({ data });
    } catch (error) {
      console.error('Profile fetch error:', error);
      return res.status(500).json({ error: 'An error occurred while fetching alumni profiles' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
