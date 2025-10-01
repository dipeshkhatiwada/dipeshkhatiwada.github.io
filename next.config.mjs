/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    distDir: 'dist',
    reactStrictMode: true,
    images: {
        unoptimized: true, // <=== disables image optimization
    },
    trailingSlash: true, // <=== adds a trailing slash to all routes
};

export default nextConfig;
