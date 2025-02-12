import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/pessoal-site',
    images: {
        unoptimized: true,
    },
}

export default nextConfig
