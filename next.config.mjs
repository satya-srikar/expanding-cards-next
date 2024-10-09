/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: isProd ? "export" : "",
  reactStrictMode: true,
  assetPrefix: isProd ? "/expanding-cards-next/" : "",
  basePath: isProd ? "/expanding-cards-next" : "",
  images: {
    unoptimized: true, // disable next/image optimization (needed for GitHub Pages)
  },
  trailingSlash: true,
};

export default nextConfig;
