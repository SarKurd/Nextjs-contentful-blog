const withOffline = require('next-offline');

module.exports = withOffline({
  env: {
    SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  },
  workboxOpts: {
    swDest: '/service-worker.js',
    globPatterns: ['static/**/*'],
    globDirectory: '.',
    modifyURLPrefix: {
      'static/': '_next/static/',
      'public/': '/'
    },
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
  }
});
