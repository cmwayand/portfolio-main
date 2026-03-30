/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid flaky webpack filesystem cache (ENOENT renames) when the IDE or
      // multiple processes touch `.next` — a common cause of 404s on JS chunks.
      config.cache = { type: "memory" };
      config.watchOptions = {
        ...config.watchOptions,
        poll: 1000,
        aggregateTimeout: 500,
      };
    }
    return config;
  },
};

export default nextConfig;
