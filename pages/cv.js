import React from 'react';

const linkedInLink = "https://www.linkedin.com/in/joshuajcardozo/";
const facebookLink = "https://www.facebook.com/joshua.j.cardozo/";
const instagramLink = "https://www.instagram.com/joshuajcardozo/";
const twitterLink = "https://twitter.com/joshuacardozo";

const CV = () => {
    return <div style={{ width: 'calc(100vw - 2em)', height: 'calc(100vh - 2em)', backgroundImage: 'linear-gradient(to bottom right, #053770, #1eb9d1)', padding: '1em', fontFamily: 'Karla' }} >
        <div style={{ backgroundColor: 'white', width: '100%', height: '100%', display: 'flex', flexDirection: 'row' }} >
            <div style={{ display: 'flex', flex: 5, flexDirection: 'column', padding: '2em', fontSize: 11 }} >
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }} ><img src='/profile.jpg' style={{ width: 200, height: 200, borderRadius: '50%' }} /></div>

                <div style={{ marginTop: 32, width: '100%' }} >
                    <LeftInfo mainText="ADDRESS" info="Grande Vanelim Colva Salcete Goa" />
                    <LeftInfo mainText="PHONE" info="8806728818" type="phone" typ="phone" />
                    <LeftInfo mainText="EMAIL" info="joshua.cardozo@gmail.com" type="email" />
                    <LeftInfo mainText="PORTFOLIO" info="joshuacardozo.com" type="url" />
                </div>

                <div style={{ marginTop: '1em', width: '100%' }} >
                    <SocialLink url={linkedInLink} displayText="joshuajcardozo">
                        <LinkedIn />
                    </SocialLink>
                    <SocialLink url={facebookLink} displayText="joshua.j.cardozo">
                        <Facebook />
                    </SocialLink>
                    <SocialLink url={instagramLink} displayText="joshuajcardozo">
                        <Instagram />
                    </SocialLink>
                    <SocialLink url={twitterLink} displayText="joshuacardozo">
                        <Twitter />
                    </SocialLink>
                </div>
                <strong style={{ marginTop: '2em', fontSize: 16 }} >EDUCATION</strong>

                <div style={{ marginTop: 10 }} ><strong>BE ENGiNEERING</strong></div>
                <div style={{ color: 'gray' }} >Goa College of Engineering</div>
                <div style={{ color: 'gray' }} >2012 - 2016</div>

                <div style={{ marginTop: 10 }} ><strong>HIGHER SECONDARY</strong></div>
                <div style={{ color: 'gray' }} >Rosarys HSS</div>
                <div style={{ color: 'gray' }} >2010 - 2012</div>

                <div style={{ marginTop: 10 }} ><strong>HIGH SCHOOL</strong></div>
                <div style={{ color: 'gray' }} >MANOVIKAS HS</div>
                <div style={{ color: 'gray' }} >2002 - 2010</div>

                <strong style={{ marginTop: '2em', fontSize: 16 }} >REFERENCES</strong>
                <div style={{ marginTop: 10 }} ><strong>BIDCHAT</strong></div>
                <a style={{ color: 'gray', fontWeight: 'normal' }} title="Website" href="https://gautamnaik.com" target="_blank" >Gautam Naik - UI/UX Designer</a>

                <div style={{ marginTop: 10 }} ><strong>BIDCHAT</strong></div>
                <div style={{ color: 'gray' }} >Nikesh Shetye - React Native Developer</div>
            </div>
            <div style={{ display: 'flex', flex: 9, flexDirection: 'column', padding: '1em' }} >
                <h1 style={{ textAlign: 'center', marginTop: 24, fontWeight: 'light', fontSize: 50 }} >JOSHUA</h1>
                <h1 style={{ textAlign: 'center', marginTop: 5, fontWeight: 'light', fontSize: 50 }} >CARDOZO</h1>
                <div style={{ textAlign: 'center', marginTop: 15, color: '#8ab1e3', fontWeight: 'normal' }} >SOFTWARE DEVELOPER</div>

                <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 48 }} >
                    <div style={{ backgroundImage: 'linear-gradient(to bottom, #053770, #1eb9d1)', width: '0.7em', height: 'calc(100% - 10px)', marginTop: 3 }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }} >
                        <div style={{ marginLeft: 24, position: 'relative' }} >
                            <div  style={{ position: 'absolute', backgroundColor: '#053770', width: 10, height: 10, left: -30, top: 3, borderRadius: '50%' }} />
                            <div style={{ fontWeight: 'bold', fontSize: 15 }} >INTRODUCTION</div>
                            <p style={{ fontSize: 12, width: '90%', marginTop: 24, color: 'gray' }} >
                                Hi, I'm Joshua, and I'm passionate about developing software that helps empower innovation in companies and improve the value proposition of products. 
                                As an organised and hightly creative individual, I love to find solutions to new problems and new solutions to existing problems. I enjoy working in a dynamic and fast paced working environment.
                            </p>
                        </div>
                        <div style={{ marginLeft: 24, position: 'relative', marginTop: 20 }} >
                            <div  style={{ position: 'absolute', backgroundColor: '#053770', width: 10, height: 10, left: -30, top: 3, borderRadius: '50%' }} />
                            <div style={{ fontWeight: 'bold', fontSize: 15 }} >EXPERIENCE</div>

                            <div style={{ fontWeight: 'bold', fontSize: 13, marginTop: 24 }} >WEB/MOBILE DEVELOPER | BIDCHAT</div>
                            <div style={{ fontWeight: 'normal', fontSize: 12, marginTop: 10, color: 'gray' }} >March 2017 - present</div>
                            <p style={{ fontSize: 12, width: '90%', marginTop: 12, color: 'gray' }} >
                                Worked closely with my fellow team mates to develop an animation plugin for an existing app in swift for iOS, developed a podcast app that plays audio using UIKit. 
                                Subsequently worked in react native to develop and upload apps to the app store and play store. 
                                Worked in react and NextJS to develop website that render both on client as well as server.
                            </p>

                            <div style={{ fontWeight: 'bold', fontSize: 13, marginTop: 24 }} >IOS DEVELOPER | GENORA</div>
                            <div style={{ fontWeight: 'normal', fontSize: 12, marginTop: 10, color: 'gray' }} >AUGUST 2016 - March 2017</div>
                            <p style={{ fontSize: 12, width: '90%', marginTop: 12, color: 'gray' }} >
                                Worked on a quiz app where users had to predict the answer as being above or below a certain value, developed using UIKit. 
                                Developed on an app for a client to internall handle freight transportation. 
                                Worked on a wellness app for people with anxieties.
                            </p>
                        </div>
                        <div style={{ marginLeft: 24, position: 'relative', marginTop: 20 }} >
                            <div  style={{ position: 'absolute', backgroundColor: '#053770', width: 10, height: 10, left: -30, top: 3, borderRadius: '50%' }} />
                            <div style={{ fontWeight: 'bold', fontSize: 15 }} >SKILLS</div>
                            <div style={{ marginTop: 16 }} >
                                <span style={{ fontSize: 12, color: 'gray', margin: 8, display: "inline-block", padding: 8, borderRadius: 4, border: '1px lightgray solid' }} >Javascript</span>
                                <span style={{ fontSize: 12, color: 'gray', margin: 8, display: "inline-block", padding: 8, borderRadius: 4, border: '1px lightgray solid' }} >HTML/CSS</span>
                                <span style={{ fontSize: 12, color: 'gray', margin: 8, display: "inline-block", padding: 8, borderRadius: 4, border: '1px lightgray solid' }} >Swift</span>
                                <span style={{ fontSize: 12, color: 'gray', margin: 8, display: "inline-block", padding: 8, borderRadius: 4, border: '1px lightgray solid' }} >Objective-C</span>
                                <span style={{ fontSize: 12, color: 'gray', margin: 8, display: "inline-block", padding: 8, borderRadius: 4, border: '1px lightgray solid' }} >UIKit</span>
                                <span style={{ fontSize: 12, color: 'gray', margin: 8, display: "inline-block", padding: 8, borderRadius: 4, border: '1px lightgray solid' }} >SwiftUI</span>
                                <span style={{ fontSize: 12, color: 'gray', margin: 8, display: "inline-block", padding: 8, borderRadius: 4, border: '1px lightgray solid' }} >React</span>
                                <span style={{ fontSize: 12, color: 'gray', margin: 8, display: "inline-block", padding: 8, borderRadius: 4, border: '1px lightgray solid' }} >nextJS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const LeftInfo = ({ mainText, info, type }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', fontSize: 11, width: '100%' }} >
            {!!mainText && <div style={{ display: 'flex', flex: 5, lineHeight: 2 }}>
                <strong>{mainText}</strong>
            </div>}
            <div style={{ display: 'flex', flex: 7, lineHeight: 2, color: 'gray' }}>
                <WrappedComponent type={type} info={info} >{info}</ WrappedComponent>
            </div>
        </div>
    )
}

const WrappedComponent = ({ type, info, children }) => {
    switch (type) {
        case "url":
            return <a style={{ color: 'gray', fontWeight: 'normal' }} title="Website" href={`https://${info}`} target="_blank" >{children}</a>
        case "email":
            return <a style={{ color: 'gray', fontWeight: 'normal' }} title="Email" href="mailto:joshua.cardozo@gmail.com" target="_blank" >{children}</a>
        case "phone":
            return <a style={{ color: 'gray', fontWeight: 'normal' }} title="Phone" href="tel:+918806728818" target="_blank" >{children}</a>
        default:
            return info
    }
}

const SocialLink = ({ children, url, displayText }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', fontSize: 11, width: '100%', marginTop: '1em' }} >
            <div style={{ display: 'flex', flex: 5, lineHeight: 2 }}>
                <div style={{ width: '1em' }} />
                {children}
            </div>
            <div style={{ display: 'flex', flex: 7, lineHeight: 2 }}>
                <a style={{ color: 'gray', fontWeight: 'normal' }} title="Social Link" href={url} target="_blank" >{displayText}</a>
            </div>
        </div>
    )
}

const LinkedIn = () => (
    <a title="LinkedIn" href={linkedInLink} target="_blank" className="svg-container" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black"><g><path d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0" data-original="#000000" ></path></g> </svg>
    </a>
)

const Facebook = () => (
    <a title="Facebook" href={facebookLink} target="_blank" className="svg-container" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 510"  fill="black"><g><path d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z     M433.5,51v76.5h-51c-15.3,0-25.5,10.2-25.5,25.5v51h76.5v76.5H357V459h-76.5V280.5h-51V204h51v-63.75    C280.5,91.8,321.3,51,369.75,51H433.5z" data-original="#000000" ></path></g> </svg>
    </a>
)

const Instagram = () => (
    <a title="Instagram" href={instagramLink} target="_blank" className="svg-container" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black"><g><path d="m370.59375 169.304688c-2.355469-6.382813-6.113281-12.160157-10.996094-16.902344-4.742187-4.882813-10.515625-8.640625-16.902344-10.996094-5.179687-2.011719-12.960937-4.40625-27.292968-5.058594-15.503906-.707031-20.152344-.859375-59.402344-.859375-39.253906 0-43.902344.148438-59.402344.855469-14.332031.65625-22.117187 3.050781-27.292968 5.0625-6.386719 2.355469-12.164063 6.113281-16.902344 10.996094-4.882813 4.742187-8.640625 10.515625-11 16.902344-2.011719 5.179687-4.40625 12.964843-5.058594 27.296874-.707031 15.5-.859375 20.148438-.859375 59.402344 0 39.25.152344 43.898438.859375 59.402344.652344 14.332031 3.046875 22.113281 5.058594 27.292969 2.359375 6.386719 6.113281 12.160156 10.996094 16.902343 4.742187 4.882813 10.515624 8.640626 16.902343 10.996094 5.179688 2.015625 12.964844 4.410156 27.296875 5.0625 15.5.707032 20.144532.855469 59.398438.855469 39.257812 0 43.90625-.148437 59.402344-.855469 14.332031-.652344 22.117187-3.046875 27.296874-5.0625 12.820313-4.945312 22.953126-15.078125 27.898438-27.898437 2.011719-5.179688 4.40625-12.960938 5.0625-27.292969.707031-15.503906.855469-20.152344.855469-59.402344 0-39.253906-.148438-43.902344-.855469-59.402344-.652344-14.332031-3.046875-22.117187-5.0625-27.296874zm-114.59375 162.179687c-41.691406 0-75.488281-33.792969-75.488281-75.484375s33.796875-75.484375 75.488281-75.484375c41.6875 0 75.484375 33.792969 75.484375 75.484375s-33.796875 75.484375-75.484375 75.484375zm78.46875-136.3125c-9.742188 0-17.640625-7.898437-17.640625-17.640625s7.898437-17.640625 17.640625-17.640625 17.640625 7.898437 17.640625 17.640625c-.003906 9.742188-7.898437 17.640625-17.640625 17.640625zm0 0" data-original="#000000"></path><path d="m305 256c0 27.0625-21.9375 49-49 49s-49-21.9375-49-49 21.9375-49 49-49 49 21.9375 49 49zm0 0" data-original="#000000"></path><path d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-72.960938 316.605469c-.710937 15.648437-3.199219 26.332031-6.832031 35.683593-7.636719 19.746094-23.246094 35.355469-42.992188 42.992188-9.347656 3.632812-20.035156 6.117188-35.679687 6.832031-15.675781.714844-20.683594.886719-60.605469.886719-39.925781 0-44.929687-.171875-60.609375-.886719-15.644531-.714843-26.332031-3.199219-35.679687-6.832031-9.8125-3.691406-18.695313-9.476562-26.039063-16.957031-7.476562-7.339844-13.261719-16.226563-16.953125-26.035157-3.632812-9.347656-6.121094-20.035156-6.832031-35.679687-.722656-15.679687-.890625-20.6875-.890625-60.609375s.167969-44.929688.886719-60.605469c.710937-15.648437 3.195312-26.332031 6.828125-35.683593 3.691406-9.808594 9.480468-18.695313 16.960937-26.035157 7.339844-7.480469 16.226563-13.265625 26.035157-16.957031 9.351562-3.632812 20.035156-6.117188 35.683593-6.832031 15.675781-.714844 20.683594-.886719 60.605469-.886719s44.929688.171875 60.605469.890625c15.648437.710937 26.332031 3.195313 35.683593 6.824219 9.808594 3.691406 18.695313 9.480468 26.039063 16.960937 7.476563 7.34375 13.265625 16.226563 16.953125 26.035157 3.636719 9.351562 6.121094 20.035156 6.835938 35.683593.714843 15.675781.882812 20.683594.882812 60.605469s-.167969 44.929688-.886719 60.605469zm0 0" data-original="#000000"></path></g> </svg>
    </a>
)

const Twitter = () => (
    <a title="Twitter" href={twitterLink} target="_blank" className="svg-container" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black"><g><path d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-102.1875 199.601562c.113281 2.519532.167969 5.050782.167969 7.59375 0 77.644532-59.101563 167.179688-167.183594 167.183594h.003906-.003906c-33.183594 0-64.0625-9.726562-90.066406-26.394531 4.597656.542969 9.277343.8125 14.015624.8125 27.53125 0 52.867188-9.390625 72.980469-25.152344-25.722656-.476562-47.410156-17.464843-54.894531-40.8125 3.582031.6875 7.265625 1.0625 11.042969 1.0625 5.363281 0 10.558593-.722656 15.496093-2.070312-26.886718-5.382813-47.140624-29.144531-47.140624-57.597657 0-.265624 0-.503906.007812-.75 7.917969 4.402344 16.972656 7.050782 26.613281 7.347657-15.777343-10.527344-26.148437-28.523438-26.148437-48.910157 0-10.765624 2.910156-20.851562 7.957031-29.535156 28.976563 35.554688 72.28125 58.9375 121.117187 61.394532-1.007812-4.304688-1.527343-8.789063-1.527343-13.398438 0-32.4375 26.316406-58.753906 58.765625-58.753906 16.902344 0 32.167968 7.144531 42.890625 18.566406 13.386719-2.640625 25.957031-7.53125 37.3125-14.261719-4.394531 13.714844-13.707031 25.222657-25.839844 32.5 11.886719-1.421875 23.214844-4.574219 33.742187-9.253906-7.863281 11.785156-17.835937 22.136719-29.308593 30.429687zm0 0" data-original="#000000" ></path></g> </svg>
    </a> 
)




export default CV;