/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      { source: '/qr/:uuid', destination: '/api/qr/:uuid' },
      { source: '/app/:any*', destination: '/app/' },
    ]
  },
  async redirects() {
    return [
      {
        source: '/app',
        destination: '/app/orders',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
