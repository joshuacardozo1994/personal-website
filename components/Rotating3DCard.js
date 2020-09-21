import React, { useState, useEffect, useRef } from 'react'

import '../styles/animatingCard.scss'

const Rotating3DCard = ({ image, title, description }) => {
    const cardWrapper = useRef(null);
    const card = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    let mouseLeaveDelay = null;
    function handleMouseMove(e) {
        var rect = cardWrapper.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - cardWrapper.current.offsetWidth/2;
        const mouseY = e.clientY - rect.top - cardWrapper.current.offsetHeight/2;


        const mousePX = mouseX / cardWrapper.current.offsetWidth;
        const mousePY = mouseY / cardWrapper.current.offsetHeight;

        const rX = mousePX * 30;
        const rY = mousePY * -30;

        const tX = mousePX * -40;
        const tY = mousePY * -40;

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
        <div ref={cardWrapper} className="card-wrap"  >
            <div ref={card} style={{ transform: `rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)` }}  className="card" >
                <div className="card-bg" style={{ transform: `translateX(${translate.x}px) translateY(${translate.y}px)`, backgroundImage: image }}></div>
                <div className="card-info">
                <h1>{title}</h1>
                <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Rotating3DCard;