import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

import globalStyles from '../styles/global.js';
import Layout from '../components/layout/Layout';

NProgress.configure({ minimum: 0.5 });

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      NProgress.start();
    });
    router.events.on('routeChangeComplete', () => {
      NProgress.done();
    });
    router.events.on('routeChangeError', () => {
      NProgress.done();
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>Grendizer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="UFO Robot Grendizer" />
      </Head>
      <Component {...pageProps}></Component>
      <style global jsx>
        {globalStyles}
      </style>
    </Layout>
  );
}

export default MyApp;
