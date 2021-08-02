import React from 'react'
import './style.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import FACEBOOK from '../../assets/facebook-f_1.svg'
import GITHUB from '../../assets/github_10.svg'
import LINKDIN from '../../assets/linkedin_6.svg'
export default function Navbar() {
    return (
        <Router>
            <div className='navbar'>
                <div className='navbar-container'>
                    <div className='navlinks-warp'>
                        <Link to="/" className='stephan-title'>Stephan Benchemoul</Link>
                        <Link to="/Projects" className='navlinks'>Projects</Link>
                        <Link to="/Contact" className='navlinks'>Contact</Link>
                    </div>
                    <div className='nav-socials'>
                        <a target="_blank" href='https://www.linkedin.com/in/stephan-benchemoul-38879320b/'>
                            <img src={LINKDIN} /></a>
                        <a target="_blank" href='https://github.com/stephanbazbaz'>
                            <img src={GITHUB} /></a>
                        <a target="_blank" href='https://www.facebook.com/ethan.hearing.10/'>
                            <img src={FACEBOOK} /></a>
                    </div>
                </div>
            </div>

            <Switch>
                <Route path="/Projects">
                    <Projects />
                </Route>
                <Route path="/Contact">
                    <Contact />
                </Route>
            </Switch>
        </Router>
    )
}
