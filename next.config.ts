import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './dist', // Changes the build output directory to `./dist/`.
    sassOptions: {
      // implementation: 'sass-embedded',
    },
    // async headers() {
    //   return [
    //     {
    //       source: '/(.*)',
    //       headers: [
    //         {
    //           key: 'X-Content-Type-Options',
    //           value: 'nosniff',
    //         },
    //         {
    //           key: 'X-Frame-Options',
    //           value: 'DENY',
    //         },
    //         {
    //           key: 'Referrer-Policy',
    //           value: 'strict-origin-when-cross-origin',
    //         },
    //       ],
    //     },
    //     {
    //       source: '/sw.js',
    //       headers: [
    //         {
    //           key: 'Content-Type',
    //           value: 'application/javascript; charset=utf-8',
    //         },
    //         {
    //           key: 'Cache-Control',
    //           value: 'no-cache, no-store, must-revalidate',
    //         },
    //         {
    //           key: 'Content-Security-Policy',
    //           value: "default-src 'self'; script-src 'self'",
    //         },
    //       ],
    //     },
    //   ]
    // },
}
   
  export default nextConfig