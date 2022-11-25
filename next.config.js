/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [{ source: '/qr/:uuid', destination: '/api/qr/:uuid' }]
  },
}

module.exports = nextConfig
