import React from 'react';

const Blob = ({ className }) => {
    return (
        <div className={className}>
            <div className="image-container">
                <img alt="A picture of Joshua" title="Joshua" src='/profile.jpg' style={{ borderRadius: 300, width: '65%' }} />
            </div>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path className="dynamic-blob" d="M34.5,-62.6C45.3,-53.4,55.1,-45.5,65.6,-35.2C76,-25,87.1,-12.5,90.6,2C94.1,16.6,90.1,33.1,81.5,46.5C72.9,60,59.7,70.3,45.4,74.9C31,79.6,15.5,78.4,0.8,77.1C-13.9,75.7,-27.9,74.1,-40.1,68.2C-52.3,62.4,-62.7,52.3,-67.1,40.2C-71.4,28.2,-69.7,14.1,-69.5,0.1C-69.3,-13.8,-70.6,-27.7,-65.2,-37.9C-59.8,-48.2,-47.6,-54.8,-35.6,-63.3C-23.7,-71.7,-11.8,-82,0,-82C11.8,-82,23.6,-71.7,34.5,-62.6Z" transform="translate(100 100)" />
            </svg>
        </div>
    )
}

export default Blob;