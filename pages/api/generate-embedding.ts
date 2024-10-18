import type { NextApiRequest, NextApiResponse } from 'next';
import { openai } from '../../lib/clients';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const embeddingResponse = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: text,
    });

    res.status(200).json({ embedding: embeddingResponse.data[0].embedding });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ error: 'Error generating embedding' });
  }
}