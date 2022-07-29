import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <link href="/favicon.ico" />
      <title>Tedy Gabriel Moisa | Web Developer</title>
    </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
