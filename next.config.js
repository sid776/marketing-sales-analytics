/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // GitHub Pages uses repository name as base path
  basePath: '/marketing-sales-analytics',
  assetPrefix: '/marketing-sales-analytics',
}

module.exports = nextConfig

