import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Oro Boveda</title>
        <meta name="description" content="Your site description here." />
        <link rel="icon" href="/goldvault.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
