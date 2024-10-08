import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />

        <title>Oro Boveda</title>
        <meta name="gold vault" content="Your site description here." />
        <link rel="logo" href="/goldvault.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
