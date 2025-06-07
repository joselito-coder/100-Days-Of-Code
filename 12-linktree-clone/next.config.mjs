/** @type {import('next').NextConfig} */
const nextConfig = {

    eslint:{
        ignoreDuringBuilds:true
    },
    images: {
        remotePatterns: [
            new URL("https://pnghq-images.nyc3.digitaloceanspaces.com/**"),
            new URL("https://www.aceshowbiz.com/images/**")
        ]
    }

};

export default nextConfig;
