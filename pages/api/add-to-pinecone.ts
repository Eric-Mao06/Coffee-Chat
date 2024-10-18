import type { NextApiRequest, NextApiResponse } from 'next';
import { pinecone } from '../../lib/clients';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id, embedding, metadata } = req.body;

  if (!id || !embedding || !metadata) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const index = pinecone.Index('alumni-profiles');
    await index.upsert([
      {
        id,
        values: embedding,
        metadata,
      },
    ]);

    res.status(200).json({ message: 'Profile added to Pinecone successfully' });
  } catch (error) {
    console.error('Pinecone API error:', error);
    res.status(500).json({ error: 'Error adding profile to Pinecone' });
  }
}
