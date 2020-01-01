const withOffline = require('next-offline');

module.exports = withOffline({
  env: {
    SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  },
  workboxOpts: {
    swDest: 'service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200
          }
        }
      }
    ]
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
