/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        // destination: "http://localhost/api/:path*", // ここを目的のアドレスに変更
        destination: "http://192.168.23.115/api/:path*", // ここを目的のアドレスに変更
      },
    ];
  },
};

export default nextConfig;
