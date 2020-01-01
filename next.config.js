const withOffline = require('next-offline');

module.exports = withOffline({
  env: {
    SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  },
  workboxOpts: {
    swDest: 'static/service-worker.js'
  },
  experimental: {
    async rewrites() {
      return [
        {
          source: '/service-worker.js',
          destination: '/_next/static/service-worker.js'
        }
      ];
    }
  }
});
