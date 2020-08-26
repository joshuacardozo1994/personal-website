import React, { useState, useEffect } from 'react'

import Blob from '../components/Blob'
import RandomBlob from '../components/RandomBlob';

import '../styles/home.scss'

const salutationText = "Hey, I'm a developer"

export default function Home() {

  const [text, setText] = useState("|");

  useEffect(() => {
    const startTextAnimation = () => {
      for (let i = 0; i <= salutationText.length; i++) {
        setTimeout(() => {
          let tempText = salutationText.substring(0, i) +  "|";
          if (tempText.length > salutationText.length) {
            tempText = salutationText
          }
          setText(tempText)
        }, 150 * i);
      }
    };
    startTextAnimation();
  }, []);

  return (
    <>
    <div className="home-container" >
      <RandomBlob />
      <div style={{ flex: 1 }} >
        <h1 className="dynamic-text salutation-text" style={{ borderRight: 2 }}>{text}</h1>
        <p className="dynamic-text" >Hi, I'm Joshua, a mobile and web front-end developer. I help turn designs into high quality products.</p>
        </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
      <Blob className="blob" />
      </div>
    </div>
    </>
  )
}
