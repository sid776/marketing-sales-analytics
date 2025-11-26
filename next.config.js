/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/marketing-sales-analytics' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/marketing-sales-analytics' : '',
}

module.exports = nextConfig

