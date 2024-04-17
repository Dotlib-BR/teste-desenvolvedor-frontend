import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from '@/styles/globalStyles';
import { SearchProvider } from '@/contexts/searchContext';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyles />
      <main id="root-layout">
        <SearchProvider>
          <Component {...pageProps} />
        </SearchProvider>
      </main>
    </>
  );
}
