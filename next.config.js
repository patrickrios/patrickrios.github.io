//const isGithubActions = process.env.GITHUB_ACTIONS || false;
//
//if (isGithubActions) {
//  // Pega o nome do repositório do GitHub Actions
//  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
//  assetPrefix = `/${repo}`;
//  basePath = `/${repo}`;
//}

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '', //patrickrios.github.io
  assetPrefix: '',///patrickrios.github.io
  trailingSlash: true,
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
