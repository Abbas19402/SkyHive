/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'toppng.com',
        port: '',
        pathname: '/uploads/preview/etihad-airways-logo-vector-11573966813yk1uupovip.jpg',
      },
    ],
  },
}

module.exports = nextConfig
