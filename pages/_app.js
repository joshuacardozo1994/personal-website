import React, { useEffect, useRef } from 'react'
import Head from 'next/head';

import '../styles/globals.scss'
import '../styles/segmented-control.scss'
import '../styles/home.scss'
import '../styles/animatingCard.scss'
import '../styles/about.scss'
import '../styles/contact.scss'

import FooterWave from '../components/FooterWave'
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Joshua Cardozo</title>
        <meta name="keywords" content="Swift, iOS, JavaScript, React, NextJS, HTML, CSS" />
        <meta name="author" content="Joshua Cardozo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" /> 
        <meta property="og:title" content="Joshua Cardozo" />
        <meta property="og:description" content="Mobile and front-end Developer based in Goa, India" />
        <meta property="og:image" content="https://joshuacardozo.com/profile.jpg" />
        <meta property="og:url" content="https://joshuacardozo.com" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Karla&family=Roboto:wght@700&display=swap" />
        <link rel="stylesheet" media="print" onload="this.onload=null;this.removeAttribute('media');" href="https://fonts.googleapis.com/css2?family=Karla&family=Roboto:wght@700&display=swap" />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Karla&family=Roboto:wght@700&display=swap"/>
        </noscript>
      </Head>
      <Header />
      <Component {...pageProps}/>
      <FooterWave />
    </>
  )
}

export default MyApp
