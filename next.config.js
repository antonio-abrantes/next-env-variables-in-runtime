/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    SECRET_KEY: process.env.NEXT_PUBLIC_SECRET_KEY,
  },
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
};

module.exports = nextConfig;
