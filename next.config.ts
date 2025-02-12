import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/frehse',
    images: {
        unoptimized: true,
    },
}

export default nextConfig
