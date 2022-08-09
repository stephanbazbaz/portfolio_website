import React from 'react'
import './style.scss';

export default function Contact() {
    const mail = 'stephanbncml@gmail.com'
    const phone = '0544522614'
    return (
        <div className='contact-container'>
            <h1>Contact</h1>
            <div>Email: <a href={`mailto:${mail}`}>{mail}</a></div>
            <div>Phone: <a href={`tel:${phone}`}>{phone}</a></div>
        </div>
    )
}
