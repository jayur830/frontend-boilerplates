// import package modules
import { AppProps } from 'next/app';

// Import global modules
import Layout from '@/components/Layout';

import '@/styles/globals.scss';

// Import local modules

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
