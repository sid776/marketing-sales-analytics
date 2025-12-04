/** @type {import('next').NextConfig} */
// Configuration for AWS Amplify (without basePath for root domain)
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Remove basePath for Amplify root domain deployment
  // If you need a subpath, uncomment and set your path:
  // basePath: '/your-app-path',
  // assetPrefix: '/your-app-path',
}

module.exports = nextConfig

