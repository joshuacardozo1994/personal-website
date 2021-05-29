import React from 'react';
import Head from 'next/head';

import Blob from '../components/Blob'
import RandomBlob from '../components/RandomBlob';
import SkillCard from '../components/SkillCard';
import SalutationText from '../components/SalutaionText';

import Styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
      <meta name="description" content="Hi, I'm Joshua, a mobile and front-end Developer based in Goa, India" />
    </Head>
    <div className="container">
    <div className={Styles['hero-section']}>
      <RandomBlob />
      <div className="f-1" >
        <SalutationText />
        <p style={{ maxWidth: '60ch' }} className="dynamic-text mt-150 fs-20" >Hi, I'm Joshua, a mobile and web front-end developer. I help turn designs into high quality products. I specialise in developing <em><strong>iOS applications</strong></em> using <em><strong>swift</strong></em>.<br/><br/> 
        I have expertise working in <em><strong>Javascript</strong></em> to develop applications in <em><strong>React Native</strong></em> and write front-end using <em><strong>React</strong></em>.<br/><br/>
        I have also worked with <em><strong>Vapor</strong></em> to write server side logic for back-end applications. 
        </p>
        </div>
      <div className={`f-1 ${Styles['blob-image-container']}`}>
      <Blob className={Styles.blob} />
      </div>
    </div>
    <div >
      <div className="dynamic-text" style={{ display: 'flex', justifyContent: 'center', marginTop: 20, opacity: 0.5 }} >My Skills</div>
      <h1 className="dynamic-text text-align-center">My Expertise</h1>
      <div className="grid-container">
          <SkillCard 
            backgroundColor="#FDDFDF80"
            title="iOS Development" 
            icon={<svg className="dynamic-svg" width={50} height={50} style={{ marginTop: '-0.6em', marginLeft: '-0.6em' }} xmlns="http://www.w3.org/2000/svg" viewBox="0.276 0.525 124.326 79.116"><path d="M4.621 6.965c0 1.368-.833 2.38-2.262 2.38-1.19 0-2.083-1.012-2.083-2.38 0-1.31.952-2.381 2.202-2.381 1.31 0 2.143 1.071 2.143 2.381zM1.327 78.5V23.78H3.57V78.5H1.327zM78.174 39.512c0 27.588-15.315 40.129-32.079 40.129-17.125 0-30.993-13.565-30.993-38.988C15.102 14.549 29.453.526 47.301.526 64.787.524 78.174 14.318 78.174 39.512zm-60.799.57C17.375 61 27.513 77.25 46.201 77.25c18.818 0 29.611-16.75 29.611-37.406 0-19.155-8.648-36.636-28.382-36.636S17.375 19.667 17.375 40.082zM86.406 72.571c3.763 2.508 10.258 4.93 15.844 4.93 10.602 0 20.031-7.417 20.031-18.334 0-10.131-6.281-15.417-16.945-19.958-9.544-4.064-18.125-8.475-18.125-19.305 0-11.285 8.891-19.267 20.975-19.267 6.498 0 11.4 1.824 13.68 3.42l-.906 1.968c-1.938-1.367-7.176-3.109-12.874-3.109-12.771 0-18.334 9.65-18.334 16.754 0 9.812 7.606 13.093 17.41 17.767 11.399 5.585 17.44 10.51 17.44 21.227 0 11.514-8.207 20.86-22.799 20.86-6.043 0-12.996-2.051-16.416-4.674l1.019-2.279z"/></svg>} 
            description={<p className="dynamic-text" style={{ marginTop: '1em' }}><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
          />
          <SkillCard 
            backgroundColor="#FCF7DE80"
            title="React" 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} style={{ marginTop: '-0.6em', marginLeft: '-0.6em' }} viewBox="0 0 841.9 595.3"><g><path fill="#61DAFB" d="M666.3,296.5c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3   c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9   c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9l0-22.3c0,0,0,0,0,0c-27.5,0-63.5,19.6-99.9,53.6   c-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11   c-2.3-10-4-19.7-5.2-29c-4.7-38.2,1.1-67.9,14.6-75.8c3-1.8,6.9-2.6,11.5-2.6l0-22.3c0,0,0,0,0,0c-8.4,0-16,1.8-22.6,5.6   c-28.1,16.2-34.4,66.7-19.9,130.1c-62.2,19.2-102.7,49.9-102.7,82.3c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4   c6.5,3.8,14.1,5.6,22.5,5.6c27.5,0,63.5-19.6,99.9-53.6c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6   c28.1-16.2,34.4-66.7,19.9-130.1C625.8,359.7,666.3,328.9,666.3,296.5z M536.1,229.8c-3.7,12.9-8.3,26.2-13.5,39.5   c-4.1-8-8.4-16-13.1-24c-4.6-8-9.5-15.8-14.4-23.4C509.3,224,523,226.6,536.1,229.8z M490.3,336.3c-7.8,13.5-15.8,26.3-24.1,38.2   c-14.9,1.3-30,2-45.2,2c-15.1,0-30.2-0.7-45-1.9c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8   c6.2-13.4,13.2-26.8,20.7-39.9c7.8-13.5,15.8-26.3,24.1-38.2c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9   c8.3,11.9,16.4,24.6,24.2,38c7.6,13.1,14.5,26.4,20.8,39.8C504.7,309.8,497.8,323.2,490.3,336.3z M522.6,323.3   c5.4,13.4,10,26.8,13.8,39.8c-13.1,3.2-26.9,5.9-41.2,8c4.9-7.7,9.8-15.6,14.4-23.7C514.2,339.4,518.5,331.3,522.6,323.3z    M421.2,430c-9.3-9.6-18.6-20.3-27.8-32c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C439.7,409.7,430.4,420.4,421.2,430z    M346.8,371.1c-14.2-2.1-27.9-4.7-41-7.9c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24C337.1,355.7,341.9,363.5,346.8,371.1z    M420.7,163c9.3,9.6,18.6,20.3,27.8,32c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C402.2,183.3,411.5,172.6,420.7,163z    M346.7,221.9c-4.9,7.7-9.8,15.6-14.4,23.7c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C318.6,226.7,332.4,224,346.7,221.9z    M256.2,347.1c-35.4-15.1-58.3-34.9-58.3-50.6c0-15.7,22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9   c-9.2,20.8-16.6,41.1-22.2,60.6C274.3,354.2,264.9,350.8,256.2,347.1z M310,490c-13.6-7.8-19.5-37.5-14.9-75.7   c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9   C316.8,492.6,313,491.7,310,490z M547.2,413.8c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6   c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C544.3,394.8,546.1,404.5,547.2,413.8z M585.7,347.1c-8.6,3.7-18,7-27.7,10.1   c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6   C644,312.2,621.1,332.1,585.7,347.1z"/><polygon fill="#61DAFB" points="320.8,78.4 320.8,78.4 320.8,78.4  "/><circle fill="#61DAFB" cx="420.9" cy="296.5" r="45.7"/><polygon fill="#61DAFB" points="520.5,78.1 520.5,78.1 520.5,78.1  "/></g></svg>} 
            description={<p className="dynamic-text" style={{ marginTop: '1em' }}><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
          />
          <SkillCard 
            backgroundColor="#DEFDE080"
            title="React Native" 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} style={{ marginTop: '-0.6em', marginLeft: '-0.6em' }} viewBox="0 0 841.9 595.3"><g><path fill="#61DAFB" d="M666.3,296.5c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3   c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9   c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9l0-22.3c0,0,0,0,0,0c-27.5,0-63.5,19.6-99.9,53.6   c-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11   c-2.3-10-4-19.7-5.2-29c-4.7-38.2,1.1-67.9,14.6-75.8c3-1.8,6.9-2.6,11.5-2.6l0-22.3c0,0,0,0,0,0c-8.4,0-16,1.8-22.6,5.6   c-28.1,16.2-34.4,66.7-19.9,130.1c-62.2,19.2-102.7,49.9-102.7,82.3c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4   c6.5,3.8,14.1,5.6,22.5,5.6c27.5,0,63.5-19.6,99.9-53.6c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6   c28.1-16.2,34.4-66.7,19.9-130.1C625.8,359.7,666.3,328.9,666.3,296.5z M536.1,229.8c-3.7,12.9-8.3,26.2-13.5,39.5   c-4.1-8-8.4-16-13.1-24c-4.6-8-9.5-15.8-14.4-23.4C509.3,224,523,226.6,536.1,229.8z M490.3,336.3c-7.8,13.5-15.8,26.3-24.1,38.2   c-14.9,1.3-30,2-45.2,2c-15.1,0-30.2-0.7-45-1.9c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8   c6.2-13.4,13.2-26.8,20.7-39.9c7.8-13.5,15.8-26.3,24.1-38.2c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9   c8.3,11.9,16.4,24.6,24.2,38c7.6,13.1,14.5,26.4,20.8,39.8C504.7,309.8,497.8,323.2,490.3,336.3z M522.6,323.3   c5.4,13.4,10,26.8,13.8,39.8c-13.1,3.2-26.9,5.9-41.2,8c4.9-7.7,9.8-15.6,14.4-23.7C514.2,339.4,518.5,331.3,522.6,323.3z    M421.2,430c-9.3-9.6-18.6-20.3-27.8-32c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C439.7,409.7,430.4,420.4,421.2,430z    M346.8,371.1c-14.2-2.1-27.9-4.7-41-7.9c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24C337.1,355.7,341.9,363.5,346.8,371.1z    M420.7,163c9.3,9.6,18.6,20.3,27.8,32c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C402.2,183.3,411.5,172.6,420.7,163z    M346.7,221.9c-4.9,7.7-9.8,15.6-14.4,23.7c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C318.6,226.7,332.4,224,346.7,221.9z    M256.2,347.1c-35.4-15.1-58.3-34.9-58.3-50.6c0-15.7,22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9   c-9.2,20.8-16.6,41.1-22.2,60.6C274.3,354.2,264.9,350.8,256.2,347.1z M310,490c-13.6-7.8-19.5-37.5-14.9-75.7   c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9   C316.8,492.6,313,491.7,310,490z M547.2,413.8c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6   c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C544.3,394.8,546.1,404.5,547.2,413.8z M585.7,347.1c-8.6,3.7-18,7-27.7,10.1   c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6   C644,312.2,621.1,332.1,585.7,347.1z"/><polygon fill="#61DAFB" points="320.8,78.4 320.8,78.4 320.8,78.4  "/><circle fill="#61DAFB" cx="420.9" cy="296.5" r="45.7"/><polygon fill="#61DAFB" points="520.5,78.1 520.5,78.1 520.5,78.1  "/></g></svg>} 
            description={<p className="dynamic-text" style={{ marginTop: '1em' }}><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
          />
          <SkillCard 
            backgroundColor="#DEF3FD80"
            title="Next.js"
            icon={<svg className="dynamic-svg"  width={50} height={50} style={{ marginTop: '-0.6em', marginLeft: '-0.6em' }} viewBox="0 0 148 90" ><path d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"></path></svg>} 
            description={<p className="dynamic-text" style={{ marginTop: '1em' }}><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
          />
          <SkillCard 
            backgroundColor="#F0DEFD50"
            title="Vapor" 
            icon={<img src="/vapor.png" width={50} height={50} style={{ marginTop: '-0.6em', marginLeft: '-0.6em' }} />} 
            description={<p className="dynamic-text" style={{ marginTop: '1em' }}><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
          />
          <SkillCard 
            backgroundColor="#DEFDE080"
            title="HTML/CSS" 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} style={{ marginTop: '-0.6em', marginLeft: '-0.6em' }} viewBox="0 0 128 128"><path d="m113.223 39.627-26.8-26.795a1 1 0 0 0 -.707-.293h-49.904a3 3 0 0 0 -3 3v7.049h-9.381a5.006 5.006 0 0 0 -5 5v10.787a4.978 4.978 0 0 0 2.031 4 4.981 4.981 0 0 0 -2.031 4v10.788a4.983 4.983 0 0 0 2.03 4 4.98 4.98 0 0 0 -2.03 4v10.787a5.006 5.006 0 0 0 5 5h9.381v35.511a3 3 0 0 0 3 3h74.758a3 3 0 0 0 3-3v-76.076a1 1 0 0 0 -.347-.758z" fill="#e6e7e8"/><path d="m108.568 36.387-26.848-26.848h-49.908a2 2 0 0 0 -2 2v8.049h25.258a4 4 0 0 1 4 4v10.787a4 4 0 0 1 -4 4 4 4 0 0 1 4 4v10.788a4 4 0 0 1 -4 4 4 4 0 0 1 4 4v10.787a4 4 0 0 1 -4 4h-25.258v36.511a2 2 0 0 0 2 2h74.758a2 2 0 0 0 2-2v-76.075z" fill="#fa759e"/><path d="m81.72 9.541h-49.908a2 2 0 0 0 -2 2v3a2 2 0 0 1 2-2h49.908z" fill="#fff"/><path d="m81.722 9.539v24.848a2 2 0 0 0 2 2h24.85z" fill="#ffd7e5"/><rect fill="#d4fbff" height="18.787" rx="4" width="43.64" x="15.43" y="19.588"/><rect fill="#6dc9f7" height="18.787" rx="4" width="43.64" x="15.43" y="38.375"/><rect fill="#0089ef" height="18.787" rx="4" width="43.64" x="15.43" y="57.163"/><path d="m60.942 99.8v.047a2.754 2.754 0 0 1 -3.849 2.527l-15.521-6.723a3.955 3.955 0 0 1 -2.381-3.627v-.042a3.954 3.954 0 0 1 2.381-3.627l15.521-6.727a2.754 2.754 0 0 1 3.849 2.528v.075a2.754 2.754 0 0 1 -1.764 2.57l-13.392 5.159 13.414 5.28a2.753 2.753 0 0 1 1.742 2.56z" fill="#fff"/><path d="m73.206 75.415a2.56 2.56 0 0 0 -3.09 1.886l-6.825 28.2a2.562 2.562 0 0 0 1.886 3.089 2.59 2.59 0 0 0 .6.072 2.549 2.549 0 0 0 2.485-1.958l6.825-28.2a2.562 2.562 0 0 0 -1.881-3.089z" fill="#fff"/><path d="m96.817 95.6-15.523 6.758a2.754 2.754 0 0 1 -3.854-2.525v-.038a2.755 2.755 0 0 1 1.748-2.564l13.453-5.282-13.44-5.2a2.756 2.756 0 0 1 -1.761-2.569 2.754 2.754 0 0 1 3.846-2.529l15.518 6.7a3.951 3.951 0 0 1 2.387 3.629 3.952 3.952 0 0 1 -2.374 3.62z" fill="#fff"/><g fill="#3a2c60"><path d="m108.57 61a1 1 0 0 0 -1 1v8.832a1 1 0 0 0 2 0v-8.832a1 1 0 0 0 -1-1z"/><path d="m109.235 35.64-26.808-26.808a1 1 0 0 0 -.707-.293h-49.907a3 3 0 0 0 -3 3v7.049h-9.383a5.006 5.006 0 0 0 -5 5v10.787a4.97 4.97 0 0 0 2.033 4 4.983 4.983 0 0 0 -2.033 4v10.788a4.981 4.981 0 0 0 2.033 4 4.97 4.97 0 0 0 -2.033 4v10.787a5.006 5.006 0 0 0 5 5h9.383v35.511a3 3 0 0 0 3 3h74.757a3 3 0 0 0 3-3v-36.511a1 1 0 1 0 -2 0v36.511a1 1 0 0 1 -1 1h-74.757a1 1 0 0 1 -1-1v-35.511h24.257a5.006 5.006 0 0 0 5-5v-10.787a4.968 4.968 0 0 0 -2.033-4 4.981 4.981 0 0 0 2.033-4v-10.788a4.981 4.981 0 0 0 -2.033-4 4.97 4.97 0 0 0 2.033-4v-10.787a5.006 5.006 0 0 0 -5-5h-24.257v-7.049a1 1 0 0 1 1-1h48.907v23.849a3 3 0 0 0 3 3h23.85v19.775a1 1 0 1 0 2 0v-20.777a1 1 0 0 0 -.335-.746zm-51.165 25.523v10.787a3 3 0 0 1 -3 3h-35.64a3 3 0 0 1 -3-3v-10.787a3 3 0 0 1 3-3h35.64a3 3 0 0 1 3 3zm0-8a3 3 0 0 1 -3 3h-35.64a3 3 0 0 1 -3-3v-10.788a3 3 0 0 1 3-3h35.64a3 3 0 0 1 3 3zm0-29.575v10.787a3 3 0 0 1 -3 3h-35.64a3 3 0 0 1 -3-3v-10.787a3 3 0 0 1 3-3h35.64a3 3 0 0 1 3 3zm24.65 10.8v-22.435l23.434 23.435h-22.434a1 1 0 0 1 -1-1z"/><path d="m23.314 32.652a.671.671 0 0 0 .506-.2.7.7 0 0 0 .191-.512v-2.684h3.93v2.688a.713.713 0 0 0 .185.512.729.729 0 0 0 .995 0 .7.7 0 0 0 .192-.512v-6.389a.7.7 0 0 0 -.186-.507.751.751 0 0 0 -1 0 .694.694 0 0 0 -.185.507v2.568h-3.93v-2.568a.657.657 0 0 0 -.7-.7.665.665 0 0 0 -.5.191.7.7 0 0 0 -.186.507v6.389a.707.707 0 0 0 .19.512.659.659 0 0 0 .498.198z"/><path d="m30.793 26.066h1.982v5.878a.683.683 0 0 0 .19.506.694.694 0 0 0 .517.191.657.657 0 0 0 .7-.7v-5.875h1.98q.654 0 .654-.577t-.654-.577h-5.369q-.652 0-.653.577t.653.577z"/><path d="m38.272 32.652a.593.593 0 0 0 .451-.179.671.671 0 0 0 .169-.473v-4.432l1.861 3.451a1 1 0 0 0 .283.359.6.6 0 0 0 .36.109.585.585 0 0 0 .359-.114 1.083 1.083 0 0 0 .283-.354l1.851-3.5v4.481a.669.669 0 0 0 .163.478.579.579 0 0 0 .446.175.614.614 0 0 0 .457-.175.645.645 0 0 0 .174-.478v-6.445a.694.694 0 0 0 -.185-.507.652.652 0 0 0 -.49-.191.72.72 0 0 0 -.641.469l-2.407 4.605-2.417-4.605a.732.732 0 0 0 -.664-.469.634.634 0 0 0 -.484.191.712.712 0 0 0 -.18.507v6.445a.67.67 0 0 0 .164.478.579.579 0 0 0 .447.174z"/><path d="m47.458 32.587h3.8q.652 0 .652-.577t-.652-.578h-3.058v-5.877a.685.685 0 0 0 -.19-.507.7.7 0 0 0 -.517-.191.657.657 0 0 0 -.7.7v6.378a.645.645 0 0 0 .175.479.66.66 0 0 0 .49.173z"/><path d="m24.163 43.645a.655.655 0 0 0 -.7.7v4.865a1.177 1.177 0 0 1 -.23.8.908.908 0 0 1 -.674.283l-.348.021a.665.665 0 0 0 -.431.159.535.535 0 0 0 -.135.4q0 .609.837.577l.349-.022a1.967 1.967 0 0 0 2.036-2.21v-4.875a.686.686 0 0 0 -.191-.507.7.7 0 0 0 -.513-.191z"/><path d="m30.929 47.472a8.742 8.742 0 0 0 -1.573-.485 4.452 4.452 0 0 1 -1.3-.446.763.763 0 0 1 -.381-.686.958.958 0 0 1 .43-.833 2.02 2.02 0 0 1 1.169-.3 2.944 2.944 0 0 1 1.03.157 3.708 3.708 0 0 1 .865.484 1.511 1.511 0 0 0 .245.12.6.6 0 0 0 .2.033.4.4 0 0 0 .322-.169.616.616 0 0 0 .135-.4.622.622 0 0 0 -.059-.289.841.841 0 0 0 -.2-.233 4.212 4.212 0 0 0 -4.062-.525 2.521 2.521 0 0 0 -1.061.833 2.03 2.03 0 0 0 -.381 1.208 1.8 1.8 0 0 0 .3 1.078 2.192 2.192 0 0 0 .905.7 7.852 7.852 0 0 0 1.556.479 5.26 5.26 0 0 1 1.323.43.7.7 0 0 1 .4.637.907.907 0 0 1 -.425.811 2.227 2.227 0 0 1 -1.218.277 3.946 3.946 0 0 1 -1.133-.152 3.264 3.264 0 0 1 -.98-.49.878.878 0 0 0 -.446-.152.4.4 0 0 0 -.321.168.662.662 0 0 0 .114.92 3.511 3.511 0 0 0 1.214.6 5.523 5.523 0 0 0 1.584.223 3.978 3.978 0 0 0 1.562-.289 2.444 2.444 0 0 0 1.056-.8 1.98 1.98 0 0 0 .376-1.193 1.646 1.646 0 0 0 -.321-1.034 2.349 2.349 0 0 0 -.925-.682z"/><path d="m24.114 69.781a3.836 3.836 0 0 0 1.944.479 4.222 4.222 0 0 0 1.349-.212 3.5 3.5 0 0 0 1.121-.616.615.615 0 0 0 .2-.234.722.722 0 0 0 .053-.288.63.63 0 0 0 -.129-.4.394.394 0 0 0 -.317-.163.586.586 0 0 0 -.228.044 1.521 1.521 0 0 0 -.218.108 4.093 4.093 0 0 1 -.9.479 2.571 2.571 0 0 1 -.866.142 2.09 2.09 0 0 1 -1.714-.708 4.018 4.018 0 0 1 0-4.169 2.09 2.09 0 0 1 1.714-.708 2.809 2.809 0 0 1 .894.136 3.286 3.286 0 0 1 .87.484.8.8 0 0 0 .446.154.394.394 0 0 0 .317-.165.627.627 0 0 0 .129-.4.716.716 0 0 0 -.053-.294.631.631 0 0 0 -.2-.228 3.5 3.5 0 0 0 -1.121-.616 4.222 4.222 0 0 0 -1.349-.211 3.835 3.835 0 0 0 -1.944.478 3.189 3.189 0 0 0 -1.279 1.366 5.108 5.108 0 0 0 0 4.175 3.188 3.188 0 0 0 1.281 1.367z"/><path d="m30.94 70.037a5.523 5.523 0 0 0 1.584.223 4 4 0 0 0 1.562-.288 2.453 2.453 0 0 0 1.056-.806 1.979 1.979 0 0 0 .376-1.192 1.641 1.641 0 0 0 -.322-1.035 2.338 2.338 0 0 0 -.925-.68 8.756 8.756 0 0 0 -1.574-.485 4.433 4.433 0 0 1 -1.3-.446.764.764 0 0 1 -.38-.686.96.96 0 0 1 .429-.833 2.023 2.023 0 0 1 1.17-.3 2.948 2.948 0 0 1 1.03.157 3.708 3.708 0 0 1 .865.484 1.435 1.435 0 0 0 .245.12.593.593 0 0 0 .2.034.4.4 0 0 0 .321-.169.616.616 0 0 0 .136-.4.622.622 0 0 0 -.059-.289.847.847 0 0 0 -.2-.233 4.218 4.218 0 0 0 -4.066-.529 2.532 2.532 0 0 0 -1.062.833 2.036 2.036 0 0 0 -.38 1.208 1.8 1.8 0 0 0 .3 1.078 2.185 2.185 0 0 0 .905.7 7.786 7.786 0 0 0 1.556.479 5.291 5.291 0 0 1 1.322.43.7.7 0 0 1 .4.637.91.91 0 0 1 -.425.811 2.228 2.228 0 0 1 -1.219.278 3.938 3.938 0 0 1 -1.132-.153 3.241 3.241 0 0 1 -.98-.49.878.878 0 0 0 -.446-.152.4.4 0 0 0 -.322.169.662.662 0 0 0 .115.919 3.493 3.493 0 0 0 1.22.606z"/><path d="m37.885 70.037a5.523 5.523 0 0 0 1.584.223 4 4 0 0 0 1.562-.288 2.447 2.447 0 0 0 1.056-.806 1.979 1.979 0 0 0 .376-1.192 1.64 1.64 0 0 0 -.321-1.035 2.349 2.349 0 0 0 -.926-.68 8.742 8.742 0 0 0 -1.573-.485 4.422 4.422 0 0 1 -1.3-.446.763.763 0 0 1 -.381-.686.961.961 0 0 1 .43-.833 2.021 2.021 0 0 1 1.17-.3 2.938 2.938 0 0 1 1.029.157 3.708 3.708 0 0 1 .865.484 1.511 1.511 0 0 0 .245.12.6.6 0 0 0 .2.034.407.407 0 0 0 .322-.169.685.685 0 0 0 .076-.687.841.841 0 0 0 -.2-.233 4.22 4.22 0 0 0 -4.067-.529 2.529 2.529 0 0 0 -1.061.833 2.03 2.03 0 0 0 -.381 1.208 1.8 1.8 0 0 0 .3 1.078 2.182 2.182 0 0 0 .9.7 7.786 7.786 0 0 0 1.556.479 5.3 5.3 0 0 1 1.323.43.7.7 0 0 1 .4.637.907.907 0 0 1 -.425.811 2.227 2.227 0 0 1 -1.218.278 3.95 3.95 0 0 1 -1.133-.153 3.241 3.241 0 0 1 -.98-.49.878.878 0 0 0 -.446-.152.4.4 0 0 0 -.321.169.661.661 0 0 0 .114.919 3.5 3.5 0 0 0 1.225.604z"/><path d="m61.943 84.156a3.755 3.755 0 0 0 -5.243-3.445l-15.52 6.727a4.984 4.984 0 0 0 0 9.13l15.52 6.732a3.755 3.755 0 0 0 5.248-3.445v-.055a3.735 3.735 0 0 0 -2.38-3.494l-11.026-4.336 10.995-4.236a3.8 3.8 0 0 0 2.406-3.578zm-3.125 1.712-13.391 5.159a1 1 0 0 0 -.007 1.864l13.41 5.279a1.745 1.745 0 0 1 1.113 1.63v.047a1.755 1.755 0 0 1 -2.453 1.61l-15.52-6.724a2.985 2.985 0 0 1 0-5.46l15.52-6.727a1.769 1.769 0 0 1 .7-.149 1.732 1.732 0 0 1 .958.292 1.815 1.815 0 0 1 -.333 3.179z"/><path d="m73.443 74.444a3.558 3.558 0 0 0 -4.3 2.622l-6.826 28.2a3.559 3.559 0 1 0 6.919 1.675l6.825-28.2a3.561 3.561 0 0 0 -2.62-4.3zm.676 3.825-6.819 28.201a1.584 1.584 0 0 1 -1.883 1.15 1.562 1.562 0 0 1 -1.149-1.882l6.825-28.2a1.558 1.558 0 0 1 1.882-1.149 1.561 1.561 0 0 1 1.148 1.882z"/><path d="m76.441 99.829a3.75 3.75 0 0 0 5.252 3.442l15.523-6.758a4.952 4.952 0 0 0 -.015-9.088l-15.519-6.695a3.754 3.754 0 1 0 -2.842 6.948l11.047 4.275-11.066 4.347a3.747 3.747 0 0 0 -2.38 3.529zm3.112-1.671 13.453-5.282a1 1 0 0 0 0-1.863l-13.44-5.2a1.764 1.764 0 0 1 -1.121-1.636 1.763 1.763 0 0 1 1.749-1.758 1.769 1.769 0 0 1 .7.147l15.519 6.695a2.952 2.952 0 0 1 .009 5.418l-15.522 6.758a1.772 1.772 0 1 1 -1.342-3.279z"/></g></svg>} 
            description={<p className="dynamic-text" style={{ marginTop: '1em' }}><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
          />
      </div>
    </div>
    </div>
    </>
  )
}
