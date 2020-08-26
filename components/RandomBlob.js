import React from 'react';

const lightColor = "#D0E2FF"
const darkColor = "#273036"

const Blob = () => {
    return (
        <div style={{ position: 'absolute', right: 0, top: 0, width: 500, height: 500, zIndex: -1, overflow: 'hidden'}}>
            <svg style={{ position: 'absolute', right: -200, top: -200}}  width= {500} height={500} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path className="dynamic-blob" d="M45.4,-76.6C59.8,-70.3,73.2,-60.2,80.5,-46.7C87.7,-33.3,88.9,-16.7,87.3,-1C85.6,14.8,81.1,29.5,73.7,42.6C66.3,55.8,55.9,67.3,43.1,74.5C30.3,81.8,15.2,84.9,-0.5,85.7C-16.1,86.5,-32.2,85.1,-46.6,78.7C-60.9,72.4,-73.6,61.1,-81.7,47.1C-89.9,33.2,-93.5,16.6,-91.8,1C-90.1,-14.6,-83,-29.2,-74.8,-43C-66.6,-56.8,-57.2,-69.9,-44.5,-77.2C-31.9,-84.5,-15.9,-86.1,-0.2,-85.8C15.5,-85.4,31,-82.9,45.4,-76.6Z" transform="translate(100 100)" />
            </svg>
        </div>
    )
}

export default Blob;