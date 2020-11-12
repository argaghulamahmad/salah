import Head from 'next/head'

import '../styles/index.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
