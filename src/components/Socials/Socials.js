import React from 'react'
import './style.scss';
import './mediaQuery.scss';
import FACEBOOK from '../../assets/facebook-f_1.svg'
import GITHUB from '../../assets/github_10.svg'
import LINKDIN from '../../assets/linkedin_6.svg'
import MAIL from '../../assets/mail-outline_1.svg'
export default function Socials() {
    return (
        <div className='nav-socialss'>
            <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/stephan-benchemoul-38879320b/'>
                <img alt='linkdin' src={LINKDIN} /></a>
            <a rel="noreferrer" target="_blank" href='https://github.com/stephanbazbaz'>
                <img alt='github' src={GITHUB} /></a>
            <a rel="noreferrer" target="_blank" href='https://www.facebook.com/ethan.hearing.10/'>
                <img alt='facebook' src={FACEBOOK} /></a>
            <a rel="noreferrer" href='mailto:stephan@pwm.co.il'>
                <img alt='facebook' src={MAIL} /></a>
        </div>
    )
}
