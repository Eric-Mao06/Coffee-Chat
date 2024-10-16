export async function generate_embedding(text: string): Promise<number[]> {
  try {
    const response = await fetch('/api/generate-embedding', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate embedding');
    }

    const data = await response.json();
    return data.embedding;
  } catch (error) {
    console.error('Embedding generation error:', error);
    throw error;
  }
}
