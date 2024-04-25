/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Strict-Transport-Security",
          value: "*",
        },
        {
          key: "access-control-allow-origin",
          value: "*",
        },
        {
          key: "X-Content-Type-Options",
          value: "*",
        },
        {
          key: "Referrer-Policy",
          value: "origin",
        },
        {
          key: "Content-Security-Policy",
          value: "frame-ancestors 'none';",
        },
      ],
    },
  ],
};

export default nextConfig;
