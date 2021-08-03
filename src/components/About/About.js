import React from 'react'
import './style.scss';
import RESUME from '../../assets/Stephan Benchemoul Resume.pdf'
export default function About() {
    return (
        <div className='about-container'>

            <div className='about-text'>Full stack web developer form Tel Aviv, Israel.
            <br />
Building websites from small landing
pages to full systems and E-commerce sites.</div>
            <a href={RESUME} download="Stephan Benchemoul Resume">
                <button className='cv-button' type="button">DOWNLOAD CV</button>
            </a>
        </div>
    )
}
