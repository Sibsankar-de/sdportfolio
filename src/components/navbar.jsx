import React, { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import { json, useLocation } from 'react-router-dom';
import { useActiveSection } from '../hooks/activeSection';
import { useScrollPosition } from '../hooks/scrollPosition';


export const useLocaldarkMode = () => {
    let darkMode
    if (localStorage.getItem('darkMode') !== undefined) {
        darkMode = localStorage.getItem('darkMode')
    } else { darkMode = false }
    return darkMode
}

export const Navbar = () => {

    const activeSection = useActiveSection();
    const scrollPosition = useScrollPosition();
    const hash = useLocation().hash;



    // Toogle btn handler 
    const [toogleValue, setToogleValue] = useState(true);
    const toogleChangeHandler = (e) => {
        setToogleValue(Boolean(e.target.checked));
    }

    useDarkMode(toogleValue)

    return (
        <header>
            {scrollPosition > 216 && <nav className='pf-nav-bar'>
                <section className='pf-logo-box'>
                    <span className='pf-logo-st-box'>
                        <span className='pf-logo-st'>S</span>
                        {/* <span className='pf-logo-back-st'></span> */}
                    </span>
                    <span className='pf-logo-tail'><span className='pf-logo-t-1'>ibsankar</span> <span className='pf-logo-t-2 fw-bold'>De</span></span>
                </section>
                <section className='pf-nav-opt-box'>
                    <ul>
                        <li className='pf-li-item'>
                            <HashLink to="#" className={`${(activeSection === 'home') && 'pf-nav-clicked-opt'}`}>
                                <span className='fw-bold'>Home</span>
                                <span className='pf-nav-opt-active'>
                                    <span className='pf-nav-opt-br pf-n-c1'></span>
                                    <span className='pf-nav-opt-br'></span>
                                    <span className='pf-nav-opt-br'></span>
                                </span>
                            </HashLink>
                        </li>
                        <li className='pf-li-item'>
                            <HashLink to="#about" className={`${(activeSection === 'about') && 'pf-nav-clicked-opt'}`}>
                                <span className='fw-bold'>About</span>
                                <span className='pf-nav-opt-active'>
                                    <span className='pf-nav-opt-br pf-n-c1'></span>
                                    <span className='pf-nav-opt-br'></span>
                                    <span className='pf-nav-opt-br'></span>
                                </span>
                            </HashLink>
                        </li>
                        <li className='pf-li-item'>
                            <HashLink to="#skills" className={`${(activeSection === 'skills') && 'pf-nav-clicked-opt'}`}>
                                <span className='fw-bold'>Skills</span>
                                <span className='pf-nav-opt-active'>
                                    <span className='pf-nav-opt-br pf-n-c1'></span>
                                    <span className='pf-nav-opt-br'></span>
                                    <span className='pf-nav-opt-br'></span>
                                </span>
                            </HashLink>
                        </li>
                        <li className='pf-li-item'>
                            <HashLink to="#projects" className={`${(activeSection === 'projects') && 'pf-nav-clicked-opt'}`}>
                                <span className='fw-bold'>Projects</span>
                                <span className='pf-nav-opt-active'>
                                    <span className='pf-nav-opt-br pf-n-c1'></span>
                                    <span className='pf-nav-opt-br'></span>
                                    <span className='pf-nav-opt-br'></span>
                                </span>
                            </HashLink>
                        </li>
                        <li className='pf-li-item'>
                            <HashLink to="#services" className={`${(activeSection === 'services') && 'pf-nav-clicked-opt'}`}>
                                <span className='fw-bold'>Services</span>
                                <span className='pf-nav-opt-active'>
                                    <span className='pf-nav-opt-br pf-n-c1'></span>
                                    <span className='pf-nav-opt-br'></span>
                                    <span className='pf-nav-opt-br'></span>
                                </span>
                            </HashLink>
                        </li>
                    </ul>
                </section>
                <section className='pf-common-prop gap-2 pf-nav-bar-toogle-box'>
                    <label className='pf-toggle-container'>
                        <input type="checkbox" id='toogle-input' className='d-none' onChange={toogleChangeHandler} checked={Boolean(toogleValue)} />
                        <span className='pf-toggle-slider pf-common-prop'>
                            {toogleValue ? <i className="ri-moon-fill fade-in-anim"></i> : <i className="bi bi-sun-fill fade-in-anim"></i>}
                        </span>
                    </label>
                </section>
            </nav>}
        </header>
    )
}



export const useDarkMode = (activeProp) => {
    // const activeProp = useLocaldarkMode()
    const rootHandler = (root, prop1, prop2) => {
        document.documentElement.style.setProperty(root, activeProp ? prop1 : prop2)
    }

    const darkModeHandler = () => {
        document.getElementsByTagName('body')[0].style.backgroundColor = activeProp ? '#08111d' : '#ffff'
        document.getElementsByTagName('body')[0].style.color = activeProp ? '#f1f1f1' : '#212529'
        const root = document.documentElement;
        rootHandler('--pf-nav-col-light', '#212529', '#f0f0f0')
        rootHandler('--pf-col-light-text', '#cecece', '#424242')
        rootHandler('--pf-col-nav-opt-dark', '#ffff', '#4b4b4b')
        rootHandler('--pf-col-mlight-text', '#c7c7c7', '#373737')
        rootHandler('--pf-col-lvio', '#ad8bd9', '#6012c6')
        rootHandler('--pf-col-main-back', '#08111d', '#ffff')
        rootHandler('--pf-col-d-condense', '#161f3036', 'transparent')
        rootHandler('--pf-col-m-condense', '#181c23', '#d9d9d9')
    }

    useEffect(() => {
        darkModeHandler();
    }, [activeProp])

    return null
}
