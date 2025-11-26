/** @type {import('next').NextConfig} */
// Support both GitHub Pages (with basePath) and Amplify (without basePath)
const isAmplify = process.env.AMPLIFY === 'true' || process.env.AWS_AMPLIFY === 'true'
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Only use basePath for GitHub Pages, not for Amplify
  ...(isGitHubPages && !isAmplify ? {
    basePath: '/marketing-sales-analytics',
    assetPrefix: '/marketing-sales-analytics',
  } : {}),
}

module.exports = nextConfig

