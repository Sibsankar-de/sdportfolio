import React from 'react'
import { HomePage } from './homePage'
import { AboutPage } from './aboutPage'
import { SkillPage } from './skillPage'
import { ProjectPage } from './projectPage'
import { ServicesPage } from './servicesPage'

export const Main = () => {
    return (
        <div className='container'>
            <section className='pf-home-content-sec' id='home'>
                <HomePage />
            </section>
            <section className='pf-home-content-sec' id='about'>
                <AboutPage />
            </section>
            <section className='pf-home-content-sec' id='skills'>
                <SkillPage />
            </section>
            <section className='pf-home-content-sec' id='projects'>
                <ProjectPage />
            </section>
            <section className='pf-home-content-sec' id='services'>
                <ServicesPage />
            </section>
        </div>
    )
}
