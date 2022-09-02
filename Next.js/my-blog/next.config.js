/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false, // 주소 뒷부분의 / 에 관한 설정
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SANITY_PROJECT_ID: '5bf0jz13'
  }
}

module.exports = nextConfig
