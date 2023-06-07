/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: "lh3.googleusercontent.com",
        port: '',
        pathname: '/image/upload/**',
      },
    ],
  },
};
module.exports = nextConfig
