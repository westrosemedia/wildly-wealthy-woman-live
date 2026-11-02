import type { NextConfig } from "next";

const wixEventPage = "https://www.jackiemcdonald.ca/wildly-wealthy-woman-live";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: wixEventPage,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
