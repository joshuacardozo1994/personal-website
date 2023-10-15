import React, { useState } from 'react';

const EmailComponent = () => {

    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [formattedMessage, setFormattedMessage] = useState('')

    function formatMessageForLineBreaks(e) {
        const text = e.target.value
        setMessage(text)
        const formattedText = `${text.replace(/[\r\n]/g, '%0D%0A')}  %0D%0A%0D%0A -${name}`
        setFormattedMessage(formattedText)
    }
    return (
        <form>
            <input value={name} onChange={e => setName(e.target.value)} className="dynamic-text" placeholder="Name" type="text" />
            <input value={subject} onChange={e => setSubject(e.target.value)} className="dynamic-text" placeholder="Subject" type="text" />
            <textarea value={message} onChange={formatMessageForLineBreaks} className="dynamic-text" placeholder="Message" />
            <a href={`mailto:joshua.cardozo@gmail.com?subject=${subject}&body=${formattedMessage}`} className="btn-link" style={{ marginTop: '1em' }} >Send Email</a>
        </form>
    )
}



export default EmailComponent;