import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    devIndicators: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: '**',
                port: '',
                pathname: '/**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/((?!docs|tabs).*)', // Exclude /docs and /tabs/*
                destination: '/tabs/first',
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
