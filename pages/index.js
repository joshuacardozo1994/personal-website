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
    <div className="hero-section container" >
      <RandomBlob />
      <div style={{ flex: 1 }} >
        <h1 className="dynamic-text salutation-text">{text}{text == (salutationBaseText + salutationFinalText) ? "" : "|"}</h1>
        <p className="dynamic-text" style={{ marginTop: 200 }} >Hi, I'm Joshua, a mobile and web front-end developer. I help turn designs into high quality products.</p>
        </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
      <Blob className="blob" />
      </div>
    </div>
    </>
  )
}
