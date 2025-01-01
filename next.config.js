/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/anurag-portfolio',
  assetPrefix: '/anurag-portfolio/',
  trailingSlash: true,
}

module.exports = nextConfig

