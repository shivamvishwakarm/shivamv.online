import type { NextConfig } from "next";
import { withDualmark } from "@dualmark/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  images: {

    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",

      }
    ]

  },
};

export default withDualmark(nextConfig, {
  siteUrl: "https://shivamv.online",
});
