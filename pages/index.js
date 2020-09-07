import React, { useState, useEffect } from 'react'

import Blob from '../components/Blob'
import RandomBlob from '../components/RandomBlob';

import '../styles/home.scss'

const salutationBaseText = "Hey, I'm a "
const firstTextToDelete = "front-end developer"
const secondTextToDelete = "mobile developer"

const salutationFinalText = "developer";

export default function Home() {

  const [text, setText] = useState("");

  async function setDelayedText(text, timeout) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (text) {
          setText(text)
        }
        resolve(text);
      }, timeout);
      
    })
  }

  useEffect(() => {
    const startTextAnimation = async () => {

      const firstText = salutationBaseText + firstTextToDelete;
      for (let i = 0; i <= firstText.length; i++) {
        await setDelayedText(firstText.substring(0, i), 100)
      }

      await setDelayedText(null, 500);

      for (let i = firstText.length; i >= salutationBaseText.length; i--) {
        await setDelayedText(firstText.substring(0, i), 50)
      }

      await setDelayedText(null, 200);

      const secondText = salutationBaseText + secondTextToDelete;
      for (let i = salutationBaseText.length; i <= secondText.length; i++) {
        await setDelayedText(secondText.substring(0, i), 100)
      }

      await setDelayedText(null, 500);

      for (let i = secondText.length; i >= salutationBaseText.length; i--) {
        await setDelayedText(secondText.substring(0, i), 50)
      }

      await setDelayedText(null, 200);

      const finalText = salutationBaseText + salutationFinalText;
      for (let i = salutationBaseText.length; i <= finalText.length; i++) {
        await setDelayedText(finalText.substring(0, i), 100)
      }

    };
    startTextAnimation();
  }, []);

  return (
    <>
    <div className="container">
    <div className="hero-section" >
      <RandomBlob />
      <div className="f-1" >
        <h1 className="dynamic-text salutation-text">{text}{text == (salutationBaseText + salutationFinalText) ? "" : "|"}</h1>
        <p style={{ maxWidth: '60ch' }} className="dynamic-text mt-150 fs-20" >Hi, I'm Joshua, a mobile and web front-end developer. I help turn designs into high quality products. I specialise in developing <em><strong>iOS applications</strong></em> using <em><strong>swift</strong></em>.<br/><br/> 
        I have expertise working in <em><strong>Javascript</strong></em> to develop applications in <em><strong>React Native</strong></em> and write front-end using <em><strong>React</strong></em>.<br/><br/>
        I have also worked with <em><strong>Vapor</strong></em> to write server side logic for back-end applications. 
        </p>
        </div>
      <div className="f-1 blob-image-container">
      <Blob className="blob" />
      </div>
    </div>
    <div >
      <div className="dynamic-text" style={{ display: 'flex', justifyContent: 'center', marginTop: 20, opacity: 0.5 }} >My Skills</div>
      <h1 className="dynamic-text text-alin-center">My Expertise</h1>
      <div className="grid-container">
          <div className="expertise-card" style={{ height: 300 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ padding: '1.5em', backgroundColor: 'red', borderRadius: 10 }} >
              <div className="svg-container" >
                <svg className="dynamic-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0.276 0.525 124.326 79.116"><path d="M4.621 6.965c0 1.368-.833 2.38-2.262 2.38-1.19 0-2.083-1.012-2.083-2.38 0-1.31.952-2.381 2.202-2.381 1.31 0 2.143 1.071 2.143 2.381zM1.327 78.5V23.78H3.57V78.5H1.327zM78.174 39.512c0 27.588-15.315 40.129-32.079 40.129-17.125 0-30.993-13.565-30.993-38.988C15.102 14.549 29.453.526 47.301.526 64.787.524 78.174 14.318 78.174 39.512zm-60.799.57C17.375 61 27.513 77.25 46.201 77.25c18.818 0 29.611-16.75 29.611-37.406 0-19.155-8.648-36.636-28.382-36.636S17.375 19.667 17.375 40.082zM86.406 72.571c3.763 2.508 10.258 4.93 15.844 4.93 10.602 0 20.031-7.417 20.031-18.334 0-10.131-6.281-15.417-16.945-19.958-9.544-4.064-18.125-8.475-18.125-19.305 0-11.285 8.891-19.267 20.975-19.267 6.498 0 11.4 1.824 13.68 3.42l-.906 1.968c-1.938-1.367-7.176-3.109-12.874-3.109-12.771 0-18.334 9.65-18.334 16.754 0 9.812 7.606 13.093 17.41 17.767 11.399 5.585 17.44 10.51 17.44 21.227 0 11.514-8.207 20.86-22.799 20.86-6.043 0-12.996-2.051-16.416-4.674l1.019-2.279z"/></svg>
              </div>
            </span>
            <h1 className="dynamic-text" style={{ display: 'inline-block', marginLeft: '0.5em' }} >iOS Development</h1>
            </div>
            <p className="dynamic-text" style={{ marginTop: '0.5em' }}>Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="expertise-card" style={{ height: 300 }} />
          <div className="expertise-card" style={{ height: 300 }} />
          <div className="expertise-card" style={{ height: 300 }} />
          <div className="expertise-card" style={{ height: 300 }} />
          {/* <div className="expertise-card" style={{ height: 300 }} /> */}
      </div>
    </div>
    </div>
    </>
  )
}
