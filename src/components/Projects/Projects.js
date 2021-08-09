import React from 'react';
import './style.scss';
import './mediaQuery.scss';
import VACATIONS from '../../assets/Screen Shot 2021-08-07 at 7.08.22 PM.png';
import SUPERMARKET from '../../assets/Screen Shot 2021-08-07 at 7.09.51 PM.png';
import HOR from '../../assets/Screen Shot 2021-08-07 at 7.10.20 PM.png';

export default function Projects() {
    return (
        <div className='projects-container'>
            <h1>Projects</h1>
            <div className='projects-row'>
                {projectsArr.map((item, index) => {
                    return (
                        <div key={index} className='projects-col'>
                            <div className='project-title'>{item.name}</div>
                            <div className='project-about'>Link:</div>
                            <a className='project-text' rel="noreferrer" target="_blank" href={item.link} >{item.name}</a>
                            <div className='project-about'>Description:</div>
                            <div className='project-text'>{item.description}</div>
                            <div className='project-about'>Info:</div>
                            <div className='project-text'>{item.info}</div>
                            {/* <iframe title={item.name} src={item.link}></iframe> */}
                            <div><img alt={item.name} src={item.pic}/></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
let projectsArr = [
    {
        name: 'SupermarketApp',
        link: 'https://stephansupermarketapp.herokuapp.com/',
        description: 'Final project from my studies at Jhon bryce Academy. Full E-commerce website of a Vegan Supermarket.',
        info: 'Front end build with React.js, Backend with Node.js and database with PostgreSQL, site hosted by Heroku.',
        pic: SUPERMARKET
    },
    {
        name: 'VacationsApp',
        link: 'https://stark-basin-64884.herokuapp.com/',
        description: 'Second project from my studies at Jhon bryce Academy emulating a vacation App where you can search & follow vacations.',
        info: 'Front end build with React.js, Backend with Node.js and database with SQL, site hosted by Heroku. you can login to Admin to upload new vacations using admin username: adminadmin, password: admin1234.',
        pic: VACATIONS
    },
    {
        name: 'HÖR',
        link: 'work in progress',
        description: 'Building the UI for the DJ live sets App - "HÖR"',
        info: 'Front end build with React.js, work in progress',
        pic: HOR
    }
]
