/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoBasePath = '/portfolio';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: isProd ? repoBasePath : '',
  assetPrefix: isProd ? `${repoBasePath}/` : undefined,
  trailingSlash: true
};

export default nextConfig;
