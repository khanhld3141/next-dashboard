/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'haycafe.vn',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
