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
    <div >
        <div className={`container ${Styles['about-hero-section-container']}`}  >
            <div className={Styles['internal-container']} >
                <div className={Styles['salutation-container']} >
                    <h1 className={`dynamic-text ${Styles['main-text']}`}>I’m Joshua</h1>
                    <p className={`dynamic-text ${Styles['about-text']}`}>Mobile &amp; front end developer</p>
                </div>
                <div className={Styles['image-blob-container']} >
                    <svg className={Styles['svg-blob']} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FF006660" d="M43.7,-78.9C55.3,-69.1,62.2,-54.5,61.1,-40.5C60.1,-26.6,51,-13.3,49.7,-0.7C48.4,11.8,54.9,23.6,55,35.8C55,48,48.6,60.6,38.4,65.1C28.2,69.5,14.1,65.8,3.3,60.1C-7.6,54.4,-15.1,46.9,-26.2,42.9C-37.2,38.9,-51.8,38.6,-58.8,32.1C-65.9,25.5,-65.4,12.8,-68.4,-1.7C-71.4,-16.2,-77.8,-32.4,-71.6,-40.4C-65.4,-48.4,-46.5,-48.1,-32.5,-56.4C-18.4,-64.8,-9.2,-81.6,3.4,-87.6C16.1,-93.6,32.2,-88.6,43.7,-78.9Z" transform="translate(100 100)" />
                    </svg>
                    <img className={Styles['profile-img']} alt="A picture of Joshua" title="Joshua" src='/profile-large.png' />
                </div>
            </div>
        </div>
        <div className="container" >
            <div  className={Styles['about-me-section']} >
                <div className={Styles['about-me-header-container']} >
                    <h2 className={`dynamic-text ${Styles['about-me-header']}`}>About Me</h2>
                </div>
                <div className={Styles['about-me-description-container']} >
                    <div>
                        <p className="dynamic-text max-readable-width" >
                            I am a software engineer by profession, I write UI and logic for web and mobile apps. Majority of my knowledge has been assimilated from online sources like Udemy, YouTube and Twitter.<br /><br />
                            I love solving problems that I experience daily, in my experience that’s the fastest way to learn, as there is in emotional investment. 
                            The projects that I loved to work on were those that had little to no documentation, the thrill of exploring uncharted territories and trying out things you wouldn’t get to try otherwise, always give me great satisfaction and a sense of pride.<br /><br />
                            The technologies that I like to work on are iOS and HTML/css, using core frameworks with no external libraries helps sharpen my skills and gives new perspective on solving existing problems.
                        </p>
                        <div className={Styles['about-me-link-container']} >
                            <Link href="/works"><span className="btn-link">View Works</span></Link>
                            <a href="/cv.pdf" className="btn-link" download="Joshua Cardozo - CV">Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div />
        <h1 className={`dynamic-text text-align-center ${Styles['hobby-header']}`}>Hobbies</h1>
        <div className="grid-container container"  >
            <Rotating3DCard title="Football" description="Childhood passion and favourite sport" image="url(https://images.unsplash.com/photo-1434648957308-5e6a859697e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80)" />
            <Rotating3DCard title="Table Tennis" description="Passtime at work, and pretty decent at it" image="url(https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80)" />
            <Rotating3DCard title="Gaming" description="To cool off after a stressful day" image="url(https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)" />
            <Rotating3DCard title="Reading" description="A calming activity when alone" image="url(https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)" />
        </div>
        
    </div>
    </>
    
)

export default About;