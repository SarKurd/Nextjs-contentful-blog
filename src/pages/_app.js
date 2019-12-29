import React from 'react';
import Head from 'next/head';

import globalStyles from '../styles/global.js';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Sarbast Mohammed</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="A personal blog by Sarbast Mohammed"
        />
      </Head>
      <Component {...pageProps}></Component>
      <style global jsx>
        {globalStyles}
      </style>
    </Layout>
  );
}

export default MyApp;
