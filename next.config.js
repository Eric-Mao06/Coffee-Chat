/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    SCRAPIN_API_KEY: process.env.SCRAPIN_API_KEY,
  },
}

export default nextConfig;
