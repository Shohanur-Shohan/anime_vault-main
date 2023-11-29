/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shikimori.one",
        port: "",
        pathname: "anime-vault-main.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
