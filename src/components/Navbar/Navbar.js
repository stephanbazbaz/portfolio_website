import React from 'react'
import './style.scss';
import './mediaQuery.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Homepage from '../Homepage/Homepage'
import About from '../About/About'
import Sounds from '../sounds/Sounds'
import FACEBOOK from '../../assets/facebook-f_1.svg'
import GITHUB from '../../assets/github_10.svg'
import LINKDIN from '../../assets/linkedin_6.svg'
import MAIL from '../../assets/mail-outline_1.svg'
export default function Navbar() {
    return (
        <Router>
            <div className='navbar'>
                <div className='navbar-container'>
                    <div className='navlinks-warp'>
                        <Link to="/" className='navlinks'>Home</Link>
                        <Link to="/Projects" className='navlinks'>Projects</Link>
                        <Link to="/Sounds" className='navlinks'>Sounds</Link>
                        <Link to="/About" className='navlinks'>About</Link>
                        <Link to="/Contact" className='navlinks'>Contact</Link>
                    </div>
                    <div className='nav-socials'>
                        <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/stephan-benchemoul-38879320b/'>
                            <img alt='linkdin' src={LINKDIN} /></a>
                        <a rel="noreferrer" target="_blank" href='https://github.com/stephanbazbaz'>
                            <img alt='github' src={GITHUB} /></a>
                        <a rel="noreferrer" target="_blank" href='https://www.facebook.com/ethan.hearing.10/'>
                            <img alt='facebook' src={FACEBOOK} /></a>
                        <a rel="noreferrer" href='mailto:stephan@pwm.co.il'>
                            <img alt='facebook' src={MAIL} /></a>
                    </div>
                </div>
            </div>
            <div className='margin-top'>
                <Switch>
                <Route path="/About">
                        <About />
                    </Route>
                    <Route path="/Projects">
                        <Projects />
                    </Route>
                    <Route path="/Sounds">
                        <Sounds />
                    </Route>
                    <Route path="/Contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Homepage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
