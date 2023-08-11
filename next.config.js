/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['zos.alipayobjects.com'], // Adicione outros domínios aqui, se necessário
  },
};

module.exports = nextConfig;
