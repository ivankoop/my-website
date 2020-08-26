const assetPrefix = process.env.BUILDING_FOR_NOW ? '/admin' : ''

module.exports = {
  publicRuntimeConfig: {
    WEBSITE_BASE_URL: process.env.WEBSITE_BASE_URL,
  },
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  },
};
