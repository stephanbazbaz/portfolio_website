import React from 'react'
import './style.scss';

export default function Projects() {
    return (
        <div className='projects-container'>
            <h1>Projects</h1>
            <div className='projects-row'>
                {projectsArr.map((item, index) => {
                    return (
                        <div key={index} className='projects-col demoObject'>
                            <div className='project-title'>{item.name}</div>
                            <div className='project-about'>Link:</div>
                            <a className='project-text' target="_blank" href={item.link} >{item.link}</a>
                            <div className='project-about'>Description:</div>
                            <div className='project-text'>{item.description}</div>
                            <div className='project-about'>Info:</div>
                            <div className='project-text'>{item.info}</div>
                            <iframe src={item.link}></iframe>
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
        info: 'work in progress'
    },
    {
        name: 'SupermarketApp',
        link: 'https://stephansupermarketapp.herokuapp.com/',
        description: 'Final project from my studies at Jhon bryce Academy. Full E-commerce website of a Vegan Supermarket.',
        info: 'yada yada yada '
    },
    {
        name: 'VacationsApp',
        link: 'https://stark-basin-64884.herokuapp.com/',
        description: 'bla bla bla',
        info: 'yada yada yada'
    }
]

// Final project from my studies at Jhon bryce Academy. Full E-commerce website of a Vegan Supermarket.