import React from 'react'
import './style.scss';

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
                            <iframe title={item.name} src={item.link}></iframe>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
let projectsArr = [
    {
        name: 'HÖR',
        link: 'https://develop.d2n3m2yjy08u8r.amplifyapp.com/',
        description: 'Building the UI for the DJ live sets App - "HÖR"',
        info: 'Front end build with React.js, work in progress'
    },
    {
        name: 'SupermarketApp',
        link: 'https://stephansupermarketapp.herokuapp.com/',
        description: 'Final project from my studies at Jhon bryce Academy. Full E-commerce website of a Vegan Supermarket.',
        info: 'Front end build with React.js, Backend with Node.js and database with D-beaver, site hosted by Heroku.'
    },
    {
        name: 'VacationsApp',
        link: 'https://stark-basin-64884.herokuapp.com/',
        description: 'Second project from my studies at Jhon bryce Academy emulating a vacation App where you can search & follow vacations.',
        info: 'Front end build with React.js, Backend with Node.js and database with SQL, site hosted by Heroku. you can login to Admin to upload new vacations using admin username: adminadmin, password: admin1234.'
    }
]

// Final project from my studies at Jhon bryce Academy. Full E-commerce website of a Vegan Supermarket.