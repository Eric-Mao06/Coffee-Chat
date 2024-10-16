import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: 'Profile ID is required' });
    }

    try {
      const { data, error } = await supabase
        .from('alumni_profiles')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      return res.status(200).json(data);
    } catch (error) {
      console.error('Profile fetch error:', error);
      return res.status(500).json({ error: 'An error occurred while fetching the profile' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
