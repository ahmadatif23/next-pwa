/** @type {import('next').NextConfig} */
const withPwa = require('next-pwa')

const nextConfig = {
    basePath: '/next-pwa',
    output: 'export',
    ...withPwa({
        dest: '/next-pwa/public',
        register: true,
        skipWaiting: true,
    })
}

module.exports = nextConfig
