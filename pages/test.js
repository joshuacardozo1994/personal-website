import React, { useEffect, useState } from 'react';

const Test = () => {
    const [ width, setWidth ] = useState(0)
    const [ height, setHeight ] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, [])

    return (
        <>
    <div>height: {height}</div>
    <div>width: {width}</div>
    </>
    )
}

export default Test;