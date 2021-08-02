import React from 'react'
import './style.scss';

export default function Contact() {
    return (
        <div className='contact-container'>
            <h1>Contact</h1>
            <div>Email: <a href='mailto:stephan@pwm.co.il'>stephan@pwm.co.il</a></div>
            <div>Phone: <a href='tel:0544522614'>0544522614</a></div>
        </div>
    )
}
