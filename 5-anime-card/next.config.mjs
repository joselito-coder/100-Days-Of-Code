/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {

        remotePatterns: [new URL("https://cdn.myanimelist.net/**")]
    }

};

export default nextConfig;
