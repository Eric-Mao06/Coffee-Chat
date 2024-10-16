import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generate_embedding(text: string): Promise<number[]> {
  try {
    console.log('Generating embedding for text:', text);
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
    });
    console.log('Embedding generated successfully');
    return response.data[0].embedding;
  } catch (error: any) {
    console.error('Error generating embedding:', error);
    
    throw new Error('Failed to generate embedding: ' + (error.message || 'Unknown error'));
  }
}
