/** SAFE DEMO: deliberately omits CSP, HSTS, X-Content-Type-Options, Permissions-Policy. */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  // poweredByHeader stays enabled (default) -> "X-Powered-By: Next.js"
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "Referrer-Policy", value: "unsafe-url" },          // weak policy
        { key: "X-NovaPay-Stack", value: "Next.js 14 / Node.js" }, // technology disclosure
      ],
    }];
  },
};
export default nextConfig;
