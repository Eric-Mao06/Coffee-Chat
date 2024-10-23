import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { linkedInUrl } = req.query;
  
    if (!linkedInUrl || typeof linkedInUrl !== 'string') {
      return res.status(400).json({ error: 'LinkedIn URL is required' });
    }
  
    const linkedInUrlRegex = /^https:\/\/www\.linkedin\.com\/in\/[\w-]+\/?$/;
    if (!linkedInUrlRegex.test(linkedInUrl)) {
      return res.status(400).json({ error: 'Invalid LinkedIn URL format' });
    }
  
    const apiKey = process.env.SCRAPIN_API_KEY;
    if (!apiKey) {
      console.error('SCRAPIN_API_KEY is not configured');
      return res.status(500).json({ error: 'API configuration error' });
    }
  
    try {
      const url = `https://api.scrapin.io/enrichment/profile?linkedInUrl=${encodeURIComponent(linkedInUrl)}&apikey=${apiKey}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error('ScrapIn API error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorData
        });
        throw new Error(`ScrapIn API error: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to fetch LinkedIn profile data');
      }
  
      return res.status(200).json(data);
    } catch (error) {
      console.error('LinkedIn profile fetch error:', error);
      return res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Failed to fetch LinkedIn profile',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      });
    }
  }