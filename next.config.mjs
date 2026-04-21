/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const isUserOrOrgPage = repository.endsWith('.github.io');

const basePath = isGithubActions && !isUserOrOrgPage ? `/${repository}` : '';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath || undefined
};

export default nextConfig;
