import React from 'react'
import reactSvg from "../assets/svg/react.svg"
import jsSvg from "../assets/svg/javascript.svg"
import cssSvg from "../assets/svg/css.svg"
import nodejsSvg from "../assets/svg/nodejs.svg"
import { useActiveSection } from '../hooks/activeSection'
import { ScrollAnimContainer } from '../utils/scroll-anim-container'

export const SkillPage = () => {
    const activeSection = useActiveSection()
    return (
        <div className='pf-skill-page-cont-container'>
            <ScrollAnimContainer activeSec={'skills'} animDirection='top'>
                <div className={`pf-p-head`}>
                    <span >My Skills</span>
                </div>
            </ScrollAnimContainer>
            <ScrollAnimContainer activeSec={'skills'} animDirection='bottom'>
                <ul className='pf-skill-page-pl-box-ul'>
                    <li className='pf-skill-page-pl-box'>
                        <section className='pf-skill-page-pl-box-img-sec'>
                            <div><img src={reactSvg} alt="" draggable={false} /></div>
                        </section>
                        <section className='pf-skill-page-pl-box-des-sec'>
                            <section><h5 className='fw-bold'><span className='pf-col-sblue'>React</span> Framework</h5></section>
                            <section className='pf-skill-page-pl-box-t-sec'>
                                <div className='pf-skil-p-box-t-sec-back'><i className="ri-code-s-slash-line"></i></div>
                                <ul>
                                    <li>
                                        <span>Proficient in building dynamic and interactive web applications using React.</span>
                                    </li>
                                    <li>
                                        <span>Experienced in creating reusable components, managing state, and handling routing.</span>
                                    </li>
                                    <li>
                                        <span>Examples of React projects you’ve worked on would be great to showcase!</span>
                                    </li>
                                </ul>
                            </section>
                        </section>
                    </li>
                    <li className='pf-skill-page-pl-box'>
                        <section className='pf-skill-page-pl-box-img-sec'>
                            <div><img src={jsSvg} alt="" draggable={false} /></div>
                        </section>
                        <section className='pf-skill-page-pl-box-des-sec'>
                            <section><h5 className='fw-bold'><span className='pf-col-jyellow'>Java</span>Script</h5></section>
                            <section className='pf-skill-page-pl-box-t-sec'>
                                <div className='pf-skil-p-box-t-sec-back'><i className="ri-terminal-line"></i></div>
                                <ul>
                                    <li>
                                        <span>Adept at writing JavaScript code to enhance user experience.</span>
                                    </li>
                                    <li>
                                        <span>Comfortable with ES6+ syntax, asynchronous programming, and working with APIs.</span>
                                    </li>
                                    <li>
                                        <span>Understanding of DOM manipulation and event handling.
                                        </span>
                                    </li>
                                </ul>
                            </section>
                        </section>
                    </li>
                    <li className='pf-skill-page-pl-box'>
                        <section className='pf-skill-page-pl-box-img-sec'>
                            <div><img src={cssSvg} alt="" draggable={false} /></div>
                        </section>
                        <section className='pf-skill-page-pl-box-des-sec'>
                            <section><h5 className='fw-bold'><span className='pf-col-sblue'>Css</span> (Cascading Style Sheets)</h5></section>
                            <section className='pf-skill-page-pl-box-t-sec'>
                                <div className='pf-skil-p-box-t-sec-back'><i className="ri-braces-line"></i></div>
                                <ul>
                                    <li>
                                        <span>Proficient in styling web pages using CSS.</span>
                                    </li>
                                    <li>
                                        <span>Knowledge of responsive design, flexbox, and grid layouts</span>
                                    </li>
                                    <li>
                                        <span>Ability to create visually appealing interfaces and animations.</span>
                                    </li>
                                </ul>
                            </section>
                        </section>
                    </li>
                    <li className='pf-skill-page-pl-box'>
                        <section className='pf-skill-page-pl-box-img-sec'>
                            <div><img src={nodejsSvg} alt="" draggable={false} /></div>
                        </section>
                        <section className='pf-skill-page-pl-box-des-sec'>
                            <section><h5 className='fw-bold'><span className='pf-col-ngreen'>Node</span>.Js</h5></section>
                            <section className='pf-skill-page-pl-box-t-sec'>
                                <div className='pf-skil-p-box-t-sec-back'><i className="ri-nodejs-fill"></i></div>
                                <ul>
                                    <li>
                                        <span>Proficient in building server-side applications.</span>
                                    </li>
                                    <li>
                                        <span>Familiar with asynchronous programming and event-driven architecture.</span>
                                    </li>
                                    <li>
                                        <span>Knowledge of RESTful API development and database management.</span>
                                    </li>
                                </ul>
                            </section>
                        </section>
                    </li>
                </ul>
            </ScrollAnimContainer>

        </div>
    )
}
