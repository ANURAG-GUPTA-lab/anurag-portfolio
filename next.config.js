/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/anurag-portfolio',
  assetPrefix: '/anurag-portfolio/',
}

module.exports = nextConfig

