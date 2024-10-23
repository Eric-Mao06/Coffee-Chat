import type { NextApiRequest, NextApiResponse } from 'next';
import { pinecone } from '../../lib/clients';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id, embedding, metadata } = req.body;
  console.log('Pinecone request validation:', {
    hasId: !!id,
    embeddingLength: embedding?.length,
    hasMetadata: !!metadata
  });

  if (!id || !embedding || !metadata) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    console.log('Initializing Pinecone index...');
    const index = pinecone.Index('alumni-profiles');
    
    console.log('Upserting to Pinecone...', { id });
    await index.upsert([{
      id: id,
      values: embedding as number[],
      metadata
    }]);

    console.log('Pinecone upsert successful');
    res.status(200).json({ message: 'Profile added to Pinecone successfully' });
  } catch (error: any) {
    console.error('Pinecone upsert error:', {
      error: error.message,
      stack: error.stack
    });
    res.status(500).json({ 
      error: 'Error upserting to Pinecone',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
