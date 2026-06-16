/** @type {import('next').NextConfig} */
// Served from the root of the custom domain (prajowolaadhikari.com.np),
// so no basePath/assetPrefix is needed.
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
