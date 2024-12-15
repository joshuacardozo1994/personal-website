import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Rotating3DCard from '../components/Rotating3DCard';

import Styles from '../styles/about.module.scss'

const About = () => (
    <>
    <Head>
      <meta name="description" content="I am a software engineer by profession, I write UI and logic for web and mobile apps, I love solving problems" />
    </Head>
    <img className={Styles['profile-img']} alt="A picture of Joshua" title="Joshua" src='/footer-dark/email-dark.png' />
    <img className={Styles['profile-img']} alt="A picture of Joshua" title="Joshua" src='/footer-dark/footer-image-dark.png' />
    <img className={Styles['profile-img']} alt="A picture of Joshua" title="Joshua" src='/footer-dark/instagram-dark.png' />
    <img className={Styles['profile-img']} alt="A picture of Joshua" title="Joshua" src='/footer-dark/linkedin-dark.png' />
    <img className={Styles['profile-img']} alt="A picture of Joshua" title="Joshua" src='/footer-dark/twitter-dark.png' />

    <img className={Styles['profile-img']} alt="A picture of Joshua" title="Joshua" src='/footer-light/email-light.png' />
    <img className={Styles['profile-img']} alt="A picture of Joshua" title="Joshua" src='/footer-light/footer-image-light.png' />
    <img className={Styles['profile-img']} alt="A picture of Joshua" title="Joshua" src='/footer-light/instagram-light.png' />
    <img className={Styles['profile-img']} alt="A picture of Joshua" title="Joshua" src='/footer-light/linkedin-light.png' />
    <img className={Styles['profile-img']} alt="A picture of Joshua" title="Joshua" src='/footer-light/twitter-light.png' />
    </>
    
)

export default About;