import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';


const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
    // assetPrefix: isProd ? '/OpenDotaTelegramMiniApp/' : '',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
