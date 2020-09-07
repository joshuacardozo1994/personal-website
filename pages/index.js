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
    <div style={{ height: 500 }} >
      <div className="dynamic-text" style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }} >My Skills</div>
      <h1 className="dynamic-text">My Expertise</h1>

    </div>
    </div>
    </>
  )
}
