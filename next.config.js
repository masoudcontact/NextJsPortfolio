/** @type {import('next').NextConfig} */
const path = require("path");
const jsonImporter = require("node-sass-json-importer");
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "assets.coingecko.com",
      "alternative.me",
      "images.unsplash.com",
      "picsum.photos",
      "random.imagecdn.app",
    ],
  },
  sassOptions: {
    importer: jsonImporter(),
  },
};
