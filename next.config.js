/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: false,
  },
  images: {
    domains: ["oaidalleapiprodscus.blob.core.windows.net"],
  },
};

module.exports = nextConfig;
