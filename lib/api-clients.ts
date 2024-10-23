import { OpenAI } from 'openai';
import { Pinecone } from '@pinecone-database/pinecone';

let openai: OpenAI | null = null;

if (typeof window === 'undefined') {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

export const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!
});

export async function generate_embedding(text: string): Promise<number[]> {
  if (!openai) {
    throw new Error('OpenAI client is not initialized. This function should only be called from the server side.');
  }

  try {
    const maxTokens = 8000;
    const truncatedText = text.slice(0, maxTokens); 
    console.log(`Original text length: ${text.length}, Truncated text length: ${truncatedText.length}`);
    console.log('Truncated text being embedded:', truncatedText);

    console.log('Generating embedding for truncated text...');
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: truncatedText,
    });
    console.log('Embedding generated successfully');
    return response.data[0].embedding;
  } catch (error: any) {
    console.error('Error generating embedding:', error);
    throw new Error(`Failed to generate embedding: ${error.message || 'Unknown error'}`);
  }
}

export { openai };
