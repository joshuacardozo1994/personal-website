import Head from 'next/head';

import '../styles/globals.scss'

import FooterWave from '../components/FooterWave'
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Joshua Cardozo</title>
        <meta name="description" content="Mobile and front-end Developer based in Goa, India" />
        <meta name="keywords" content="Swift, iOS, JavaScript, React, NextJS, HTML, CSS" />
        <meta name="author" content="Joshua Cardozo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Joshua Cardozo" />
        <meta property="og:description" content="Mobile and front-end Developer based in Goa, India" />
        <meta property="og:image" content="https://joshuacardozo.com/profile.jpg" />
        <meta property="og:url" content="https://joshuacardozo.com" />
      </Head>
      <Header />
      <Component {...pageProps}/>
      <FooterWave />
    </>
  )
}

export default MyApp
