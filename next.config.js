/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
};

module.exports = nextConfig;
