import React, { useState, useEffect } from 'react'

const SAR = () => {
    const [showSender, setShowSender] = useState(false);

    useEffect(() => {
		const init = () => {
			setTimeout(() => {
                setShowSender(true)
            }, 10000);
		};
		init();
	  }, []);
    return (
        <div style={{ minHeight: '100vh' }} >
        <h1 className="dynamic-text" style={{ textAlign: 'center', marginTop: 50 }}>Actually your ass is sexier</h1>
        <div className="dynamic-text" style={{ display: "flex", justifyContent: 'flex-end', marginRight: 50 }} >{showSender ? "-Rochelle to Joshua" : ""}</div>
        </div>
    )
}

export default SAR;