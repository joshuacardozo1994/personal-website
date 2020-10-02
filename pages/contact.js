import React from 'react';

const Contact = () => (
    <div className="container" >
    <div className="max-readable-width" style={{ margin: 'auto', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 285px)' }} >
        <h1 className="dynamic-text mt-15" style={{ color: '#ff6961' }}>Don't be a stranger</h1>
        <h1 className="dynamic-text mt-15">say hello.</h1>
        <p className="dynamic-text mt-30 max-readable-width" >I'm not currently looking for any new opportunities, but feel free to get in touch, if you need any assistance related to the skills I possess.</p>
        <address>
            <span for="email" className="dynamic-text" style={{ display: 'block', marginTop: '2em', opacity: 0.5 }}>Need help?</span>
            <a id="email" href="mailto:joshua.cardozo@gmail.com">joshua.cardozo@gmail.com</a>
            <span className="dynamic-text" style={{ display: 'block', marginTop: '2em', opacity: 0.5 }}>Feel like talking</span>
            <a href="tel:+918806728818">+91 8806728818</a>
        </address>
    </div>
    </div>
)

export default Contact;