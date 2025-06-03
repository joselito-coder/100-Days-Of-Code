/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        remotePatterns:[{
            protocol:"https",
            hostname:"media.gettyimages.com"
        }]
    },
    // below is for exporting
    // output:"export",
    // trailingSlash:true,
    crossOrigin:"anonymous"

};

export default nextConfig;
