/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // GitHub Pages uses repository name as base path
  basePath: process.env.GITHUB_ACTIONS ? '/marketing-sales-analytics' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/marketing-sales-analytics' : '',
}

module.exports = nextConfig

