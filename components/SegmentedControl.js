import React, { useState, useEffect } from 'react'

const SegmentedControl = ({ uniqueID, index, setTheme }) => {
    
    return (
        <div className="ios13-segmented-control">
			<span className="selection" style={{ transform: `translateX(${index * 100}%)` }}></span>

			<div className="option">
				<input type="radio" id={`light-${uniqueID}`} name="sample" value="light" index="0" checked={index == 0} onChange={e => setTheme(e.target.value, 0)}/>
				<label htmlFor={`light-${uniqueID}`}><span>Light</span></label>
			</div>

			<div className="option">
				<input type="radio" id={`dark-${uniqueID}`} name="sample" value="dark" index="1" checked={index == 1} onChange={e => setTheme(e.target.value, 1)}/>
				<label htmlFor={`dark-${uniqueID}`}><span>Dark</span></label>
			</div>

			<div className="option">
				<input type="radio" id={`auto-${uniqueID}`} name="sample" value="" index="2" checked={index == 2} onChange={e => setTheme(e.target.value, 2)}/>
				<label htmlFor={`auto-${uniqueID}`}><span>Auto</span></label>
			</div>

		</div>
    )
}

export default SegmentedControl;