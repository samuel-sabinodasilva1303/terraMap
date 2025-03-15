/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  basePath: "/Projeto-Integrador-III", 
  assetPrefix: "/Projeto-Integrador-III/",
};

module.exports = nextConfig;
