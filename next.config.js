const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // Pega o nome do repositório do GitHub Actions
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}`;
  basePath = `/${repo}`;
}

const nextConfig = {
  output: 'export',
  assetPrefix,
  basePath,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
