import React, { useState, useEffect } from 'react'

const salutationBaseText = "Hey, I'm a "
const firstTextToDelete = "front-end developer"
const secondTextToDelete = "mobile developer"
const salutationFinalText = "developer";

import Styles from '../styles/home.module.scss'

const SalutaionText = () => {
    const [text, setText] = useState("");

    let firstSetInterval = null;
    let secondSetInterval = null;
    let thirdSetInterval = null;
    let fourthSetInterval = null;
    let fifthSetInterval = null;

    let firstSetTimeout = null;
    let secondSetTimeout = null;
    let thirdSetTimeout = null;
    let fourthSetTimeout = null;

  useEffect(() => {
    const firstAnimation = () => {
      const fullText = salutationBaseText + firstTextToDelete;
      let i = 0;
      firstSetInterval = setInterval(() => {
        setText(fullText.substring(0, i))
        if (i >= fullText.length) {
          clearInterval(firstSetInterval)
        }
        i += 1;
      }, 100);
    }

    const secondAnimation = () => {
      const fullText = salutationBaseText + firstTextToDelete;
      let i = fullText.length
      secondSetInterval = setInterval(() => {
        setText(fullText.substring(0, i))
        if (i <= salutationBaseText.length) {
          clearInterval(secondSetInterval)
        }
        i -= 1;
      }, 50);
    }

    const thirdAnimation = () => {
      const fullText = salutationBaseText + secondTextToDelete;
      let i = salutationBaseText.length;
      thirdSetInterval = setInterval(() => {
        setText(fullText.substring(0, i))
        if (i >= fullText.length) {
          clearInterval(thirdSetInterval)
        }
        i += 1;
      }, 100);
    }

    const fourthAnimation = () => {
      const fullText = salutationBaseText + secondTextToDelete;
      let i = fullText.length;
      fourthSetInterval = setInterval(() => {
        setText(fullText.substring(0, i))
        if (i <= salutationBaseText.length) {
          clearInterval(fourthSetInterval)
        }
        i -= 1;
      }, 50);
    }

    const fifthAnimation = () => {
      const fullText = salutationBaseText + salutationFinalText
      let i = salutationBaseText.length;
      fifthSetInterval = setInterval(() => {
        setText(fullText.substring(0, i))
        if (i >= fullText.length) {
          clearInterval(fifthSetInterval)
        }
        i += 1;
      }, 100);
    }

    const clearTimers = () => {
      clearInterval(firstSetInterval)
      clearInterval(secondSetInterval)
      clearInterval(thirdSetInterval)
      clearInterval(fourthSetInterval)
      clearInterval(fifthSetInterval)

      clearTimeout(firstSetTimeout)
      clearTimeout(secondSetTimeout)
      clearTimeout(thirdSetTimeout)
      clearTimeout(fourthSetTimeout)
    }

    const startTextAnimation = () => {
      let delay = 0
      clearTimers();
      firstAnimation();

      delay += (salutationBaseText + firstTextToDelete).length * 100 + 500;
      firstSetTimeout = setTimeout(() => {
        secondAnimation();
        sessionStorage.setItem("animationShown", true)
      }, delay);

      delay += (firstTextToDelete.length * 50) + 200;
      secondSetTimeout = setTimeout(() => {
        thirdAnimation();
      }, delay);

      delay += (secondTextToDelete.length * 100) + 500;
      thirdSetTimeout = setTimeout(() => {
        fourthAnimation();
      }, delay);

      delay += (secondTextToDelete.length * 50) + 200;
      fourthSetTimeout = setTimeout(() => {
        fifthAnimation();
      }, delay);



    };
    if (!sessionStorage.getItem("animationShown")) {
      startTextAnimation();
    } else {
      setText(salutationBaseText + salutationFinalText)
    }
    return () => {
      clearTimers()
    }
  }, []);

  return (
    <h1 className={`dynamic-text ${Styles['salutation-text']}`}>{text}{text == (salutationBaseText + salutationFinalText) ? "" : "|"}</h1>
  )
}

export default SalutaionText;