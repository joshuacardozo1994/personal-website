import React, { useState, useRef, useEffect } from 'react'

import '../styles/segmented-control.scss'

const themes = ["light", "dark"];

const SegmentedControl = () => {
	const [index, setIndex] = useState(2);
	
	useEffect(() => {
		const setDefaultTheme = () => {
			const theme = localStorage.getItem("theme")
			if (themes.includes(theme)) {
				document.documentElement.setAttribute('data-theme', theme);
				setIndex(themes.indexOf(theme))
			}
		};
		setDefaultTheme();
	  }, []);

    function setTheme(value, index) {
		setIndex(index);
		localStorage.setItem("theme", value);
        document.documentElement.setAttribute('data-theme', value);
	}
    
    return (
        <div class="ios13-segmented-control">
			<span class="selection" style={{ transform: `translateX(${index * 100}%)` }}></span>

			<div class="option">
				<input type="radio" id="light" name="sample" value="light" index="0" checked={index == 0} onChange={e => setTheme(e.target.value, 0)}/>
				<label for="light"><span>Light</span></label>
			</div>

			<div class="option">
				<input type="radio" id="dark" name="sample" value="dark" index="1" checked={index == 1} onChange={e => setTheme(e.target.value, 1)}/>
				<label for="dark"><span>Dark</span></label>
			</div>

			<div class="option">
				<input type="radio" id="auto" name="sample" value="" index="2" checked={index == 2} onChange={e => setTheme(e.target.value, 2)}/>
				<label for="auto"><span>Auto</span></label>
			</div>

		</div>
    )
}

export default SegmentedControl;