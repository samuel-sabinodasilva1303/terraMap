/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true, 
  images: {
    unoptimized: true, 
  },
  basePath: "/Projeto-Integrador-III", 
  assetPrefix: "/Projeto-Integrador-III",
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
};

module.exports = nextConfig;
