/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, 
  },
  basePath: "/Projeto-Integrador-III", 
  assetPrefix: "/Projeto-Integrador-III/",
};

module.exports = nextConfig;
