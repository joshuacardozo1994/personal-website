import React, { useState, useEffect, useRef } from 'react'

import Styles from '../styles/animatingCard.module.scss'

const Rotating3DCard = ({ image, title, description }) => {
    const cardWrapper = useRef(null);
    const card = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    let mouseLeaveDelay = null;
    function handleMouseMove(e) {
        var rect = cardWrapper.current.getBoundingClientRect();
        const width = cardWrapper.current.offsetWidth;
        const height = cardWrapper.current.offsetHeight;

        const maxDegreeRotation = 7.5;
        const maxTranslation = 20;

        const mouseX = e.clientX - rect.left - width/2;
        const mouseY = e.clientY - rect.top - height/2;


        const mousePX = mouseX / (width/2);
        const mousePY = mouseY / (height/2);

        const rX = mousePX * maxDegreeRotation;
        const rY = mousePY * -maxDegreeRotation;

        const tX = mousePX * -maxTranslation;
        const tY = mousePY * -maxTranslation;

        setRotation({ x: rX, y: rY })
        setTranslate({ x: tX, y: tY })
    }

    function handleMouseEnter(e) {
        clearTimeout(mouseLeaveDelay);
    }

    function handleMouseLeave(e) {
        mouseLeaveDelay = setTimeout(()=>{
            setRotation({ x: 0, y: 0 })
            setTranslate({ x: 0, y: 0 })
          }, 300);
    }
    useEffect(() => {
        cardWrapper.current.addEventListener('mousemove', handleMouseMove)
        cardWrapper.current.addEventListener('mouseenter', handleMouseEnter)
        cardWrapper.current.addEventListener('mouseleave', handleMouseLeave)
        return () => {
            cardWrapper.current.removeEventListener('mousemove', handleMouseMove)
            cardWrapper.current.removeEventListener('mouseenter', handleMouseEnter)
            cardWrapper.current.removeEventListener('mouseleave', handleMouseLeave)
        };
    }, [])
    return (
        <div ref={cardWrapper} className={Styles['card-wrap']}  >
            <div ref={card} style={{ transform: `rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)` }}  className={Styles.card} >
                <div className={Styles['card-bg']} style={{ transform: `translateX(${translate.x}px) translateY(${translate.y}px)`, backgroundImage: image }}></div>
                <div className={Styles['card-info']}>
                <h1>{title}</h1>
                <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Rotating3DCard;