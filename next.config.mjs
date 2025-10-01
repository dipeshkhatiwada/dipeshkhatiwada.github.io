/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    output: "export",  // <=== enables static exports
    distDir: 'dist',
    reactStrictMode: true,
    images: {
        unoptimized: true, // <=== disables image optimization
    },
    trailingSlash: true, // <=== adds a trailing slash to all routes
    basePath: '', // <=== set base path if needed
    // assetPrefix: '', // <=== set asset prefix if needed (e.g., CDN)
};

export default nextConfig;
