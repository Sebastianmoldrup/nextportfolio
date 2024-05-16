/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        port: '',
        pathname: '/icons',
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
