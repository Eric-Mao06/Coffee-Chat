import type { NextApiRequest, NextApiResponse } from 'next';
import { generate_embedding } from '../../lib/openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  console.log(`Received text of length: ${text.length}`);

  try {
    const embedding = await generate_embedding(text);
    res.status(200).json({ embedding });
  } catch (error: any) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ error: `Error generating embedding: ${error.message}` });
  }
}
