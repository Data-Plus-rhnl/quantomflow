/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/blog-google-maps.html',
        destination: '/blog/google-maps',
      },
      {
        source: '/blog-shopify-custom.html',
        destination: '/blog/shopify-custom',
      },
      {
        source: '/blog-mobile-mistakes.html',
        destination: '/blog/mobile-mistakes',
      },
    ];
  },
};

export default nextConfig;
