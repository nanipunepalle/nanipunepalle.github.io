/** @type {import('next').NextConfig} */

const basePath = process.env.NODE_ENV === 'production' ? '/my_portfolio' : '';
const nextConfig = {
    basePath,
    assetPrefix: `${basePath}/`,
    output: 'export',
};

export default nextConfig;
