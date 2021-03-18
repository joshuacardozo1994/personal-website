import React from 'react';
import Head from 'next/head';

import EmailComponent from '../components/EmailComponent'



const Contact = () => (
    <>
    <Head>
      <meta name="description" content="My DM's are always open on my social profiles, feel free to contact me on my email and phone number as well." />
    </Head>
    <div className="container contact-container" >
            <div style={{ display: 'flex', flex: 1 }} >
                <div className="max-readable-width" style={{ display: 'flex', flexDirection: 'column', paddingBottom: '2em', paddingLeft: '0.5em', paddingRight: '0.5em' }} >
                    <h1 className="dynamic-text mt-15" style={{ color: '#ff6961' }}>Don't be a stranger</h1>
                    <h2 className="dynamic-text mt-15">say hello.</h2>
                    <p className="dynamic-text mt-30 max-readable-width" >I'm not currently looking for any new opportunities, but if you need any assistance related to the skills I possess, feel free to get in touch.</p>
                    <address>
                        <span for="email" className="dynamic-text" style={{ display: 'block', marginTop: '2em', opacity: 0.5 }}>Need help?</span>
                        <a id="email" href="mailto:joshua.cardozo@gmail.com">joshua.cardozo@gmail.com</a>
                        <span className="dynamic-text" style={{ display: 'block', marginTop: '2em', opacity: 0.5 }}>Feel like talking</span>
                        <a href="tel:+918806728818">+91 8806728818</a>
                    </address>
                </div>
            </div>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingLeft: '0.5em', paddingRight: '0.5em' }} >
                <EmailComponent />
            </div>
    </div>
    </>
)

export default Contact;