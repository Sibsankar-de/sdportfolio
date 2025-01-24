import React, { useContext, useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import { json, useLocation } from 'react-router-dom';
import { useActiveSection } from '../hooks/activeSection';
import { useScrollPosition } from '../hooks/scrollPosition';
import { handleThemeChange } from '../utils/theme-handle';
import ThemeContext from '../context/ThemeContext';


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
    const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
    const [isDarkMode, setIsDarkMode] = useState(false)
    useEffect(() => {
        if (currentTheme === "dark") setIsDarkMode(true)
        else { setIsDarkMode(false) }
    }, [currentTheme])

    const handleToogleBtn = () => {
        if (currentTheme === "dark") {
            setIsDarkMode(false);
            setCurrentTheme('light')
        }
        else {
            setIsDarkMode(true);
            setCurrentTheme('dark')
        }
    }
    const handleToogleTheme = () => {
        handleThemeChange()
        handleToogleBtn()
    }
    
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
                        <input type="checkbox" id='toogle-input' className='d-none' onChange={handleToogleTheme} checked={isDarkMode} />
                        <span className='pf-toggle-slider pf-common-prop'>
                            {isDarkMode ? <i className="ri-moon-fill fade-in-anim"></i> : <i className="bi bi-sun-fill fade-in-anim"></i>}
                        </span>
                    </label>
                </section>
            </nav>}
        </header>
    )
}
