/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, 
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
      };
    }
    return config;
  },
  basePath: "/Projeto-Integrador-III", 
  assetPrefix: "/Projeto-Integrador-III",
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: "AIzaSyCj4nV0Kl9E36DN5VlYMEER9UwkkKMveag",
  },
};

module.exports = nextConfig;
