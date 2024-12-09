/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/react",
        destination: `${process.env.REACT_DOMAIN}`,
      },
      {
        source: "/react/:path+",
        destination: `${process.env.REACT_DOMAIN}/:path+`,
      },
      {
        source: "/tailwind",
        destination: `${process.env.TAILWIND_DOMAIN}`,
      },
      {
        source: "/tailwind/:path+",
        destination: `${process.env.TAILWIND_DOMAIN}/:path+`,
      },
    ]
  },
}

export default nextConfig
