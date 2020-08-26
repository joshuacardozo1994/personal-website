import React, { useEffect, useState } from 'react';

const lightColor = "#aed4f4";
const darkColor = "#273036";

const FooterWave = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path className="dynamic-footer-blob" fillOpacity="1" d="M0,128L48,133.3C96,139,192,149,288,160C384,171,480,181,576,165.3C672,149,768,107,864,122.7C960,139,1056,213,1152,234.7C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    )
}

export default FooterWave