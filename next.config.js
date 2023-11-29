/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        hostname: "anime-vault-main.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
