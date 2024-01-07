const withNextIntl = require("next-intl/plugin")("./src/lib/intl.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@bitshop/ui"],
};

module.exports = withNextIntl(nextConfig);
