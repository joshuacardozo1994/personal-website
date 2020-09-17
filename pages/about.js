import React from 'react';
import Link from 'next/link'

import '../styles/about.scss'

const About = () => (
    <div >
    <div className="container about-hero-section-container"  >
        <div className="internal-container" >
            <div className="salutation-container" >
                <h1 className="dynamic-text main-text">I’m Joshua</h1>
                <h6 className="dynamic-text about-text">Mobile &amp; front end developer</h6>
            </div>
            <div className="image-blob-container" >
                <svg className="svg-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FF006660" d="M43.7,-78.9C55.3,-69.1,62.2,-54.5,61.1,-40.5C60.1,-26.6,51,-13.3,49.7,-0.7C48.4,11.8,54.9,23.6,55,35.8C55,48,48.6,60.6,38.4,65.1C28.2,69.5,14.1,65.8,3.3,60.1C-7.6,54.4,-15.1,46.9,-26.2,42.9C-37.2,38.9,-51.8,38.6,-58.8,32.1C-65.9,25.5,-65.4,12.8,-68.4,-1.7C-71.4,-16.2,-77.8,-32.4,-71.6,-40.4C-65.4,-48.4,-46.5,-48.1,-32.5,-56.4C-18.4,-64.8,-9.2,-81.6,3.4,-87.6C16.1,-93.6,32.2,-88.6,43.7,-78.9Z" transform="translate(100 100)" />
                </svg>
                <img className="profile-img" alt="A picture of Joshua" title="Joshua" src='/profile-large.png' />
            </div>
        </div>
    </div>
    <div className="container" >
    <div  className="about-me-section" >
        <div className="about-me-header-container" >
            <h2 className="dynamic-text about-me-header" >About Me</h2>
        </div>
        <div className="about-me-description-container" >
            <div>
                <p className="dynamic-text max-readable-width" >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="about-me-link-container" >
                    <Link href="/works"><a className="btn-link">View Works</a></Link>
                    <a className="btn-link">Download CV</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    
)

export default About;