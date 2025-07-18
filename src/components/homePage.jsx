import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useActiveSection } from '../hooks/activeSection'
import { ScrollAnimContainer } from '../utils/scroll-anim-container'
import ThemeContext from '../context/ThemeContext'
import { handleThemeChange } from '../utils/theme-handle'

// import { useDarkMode, useLocaldarkMode } from './navbar'

export const HomePage = () => {
    const activeSection = useActiveSection()
    const navigate = useNavigate();
    const [sNavOpen, setSNavOpen] = useState(false)
    const boxRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', e => {
            if (boxRef.current && sNavOpen && !boxRef.current.contains(e.target)) {
                setSNavOpen(false);
            }
        })
        document.addEventListener('scroll', () => sNavOpen && setSNavOpen(false))

    });

    // Handle skills show
    const skills = [
        "Full-stack Web development",
        "Next.js Development",
        "MERN Stack Development",
        "Machine Learning",
        "Generative AI"
    ];
    const [displayedSkill, setDisplayedSkill] = useState('');
    const [skillIndex, setSkillIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let typingSpeed = isDeleting ? 50 : 90;
        let timeout;

        if (!isDeleting && charIndex <= skills[skillIndex].length) {
            setDisplayedSkill(skills[skillIndex].substring(0, charIndex));
            timeout = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
        } else if (isDeleting && charIndex >= 0) {
            setDisplayedSkill(skills[skillIndex].substring(0, charIndex));
            timeout = setTimeout(() => setCharIndex(charIndex - 1), typingSpeed);
        } else if (!isDeleting && charIndex > skills[skillIndex].length) {
            timeout = setTimeout(() => setIsDeleting(true), 2500);
        } else if (isDeleting && charIndex < 0) {
            setIsDeleting(false);
            setSkillIndex((skillIndex + 1) % skills.length);
            setCharIndex(0);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, skillIndex, skills]);

    // You can use `displayedSkill` in your JSX where you want the animated skill to appear.

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
        <>
            <section className='pf-cross-background'></section>
            <section className='pf-home-cont-box'>
                <div className='pf-home-nav'>
                    <section className='pf-fl-logo-box'>
                        <span className='pf-col-violet '>Free</span>
                        <span>lancer</span>
                    </section>
                    <section className='pf-nav-opt-box-cont'>
                        <div className='pf-nav-opt-box pf-home-nav-opt-box'>
                            <ul>
                                <li className='pf-li-item pf-home-nav-li'>
                                    <HashLink to="/" className='pf-nav-active'>
                                        <span>Home</span>
                                        <span className='pf-nav-opt-active '>
                                            <span className='pf-nav-opt-br pf-n-c1'></span>
                                            <span className='pf-nav-opt-br'></span>
                                            <span className='pf-nav-opt-br'></span>
                                        </span>
                                    </HashLink>
                                </li>
                                <li className='pf-li-item  pf-home-nav-li'>
                                    <HashLink to="#about" smooth>
                                        <span>About</span>
                                        <span className='pf-nav-opt-active'>
                                            <span className='pf-nav-opt-br pf-n-c1'></span>
                                            <span className='pf-nav-opt-br'></span>
                                            <span className='pf-nav-opt-br'></span>
                                        </span>
                                    </HashLink>
                                </li>
                                <li className='pf-li-item  pf-home-nav-li'>
                                    <HashLink to="#skills">
                                        <span>Skills</span>
                                        <span className='pf-nav-opt-active'>
                                            <span className='pf-nav-opt-br pf-n-c1'></span>
                                            <span className='pf-nav-opt-br'></span>
                                            <span className='pf-nav-opt-br'></span>
                                        </span>
                                    </HashLink>
                                </li>
                                <li className='pf-li-item  pf-home-nav-li'>
                                    <HashLink to="#projects">
                                        <span>Projects</span>
                                        <span className='pf-nav-opt-active'>
                                            <span className='pf-nav-opt-br pf-n-c1'></span>
                                            <span className='pf-nav-opt-br'></span>
                                            <span className='pf-nav-opt-br'></span>
                                        </span>
                                    </HashLink>
                                </li>
                                <li className='pf-li-item  pf-home-nav-li'>
                                    <HashLink to="#services">
                                        <span>Services</span>
                                        <span className='pf-nav-opt-active'>
                                            <span className='pf-nav-opt-br pf-n-c1'></span>
                                            <span className='pf-nav-opt-br'></span>
                                            <span className='pf-nav-opt-br'></span>
                                        </span>
                                    </HashLink>
                                </li>
                            </ul>
                        </div>
                        <div className='pf-common-prop gap-2 pf-col-semwhite'>
                            <label className='pf-toggle-container pf-home-toogle-btn'>
                                <input type="checkbox" id='toogle-input' className='d-none' onChange={handleToogleTheme} checked={isDarkMode} />
                                <span className='pf-toggle-slider pf-common-prop'>
                                    {isDarkMode ? <i className="ri-moon-fill"></i> : <i className="ri-sun-fill"></i>}
                                </span>
                            </label>
                        </div>
                        <div className='pf-home-nav-menu-btn-box'>
                            <button className='btn' onClick={() => setSNavOpen(!sNavOpen)}><span><i className="ri-menu-3-line fs-5"></i></span></button>
                            <section className={`pf-home-nav-menu-box ${sNavOpen && 'pf-home-nav-m-box-open'}`} ref={boxRef}>
                                <div className='pf-home-nav-menu-cont-box'>
                                    <button className='btn' onClick={() => setSNavOpen(false)}><i className="ri-close-large-line pf-col-violet"></i></button>
                                    <ul>
                                        <li className='pf-li-item'>
                                            <HashLink to="/" >
                                                <div>Home</div>
                                            </HashLink>
                                        </li>
                                        <li className='pf-li-item'>
                                            <HashLink to="#about" smooth>
                                                <div>About</div>
                                            </HashLink>
                                        </li>
                                        <li className='pf-li-item '>
                                            <HashLink to="#skills">
                                                <div>Skills</div>
                                            </HashLink>
                                        </li>
                                        <li className='pf-li-item '>
                                            <HashLink to="#projects">
                                                <div>Projects</div>
                                            </HashLink>
                                        </li>
                                        <li className='pf-li-item '>
                                            <HashLink to="#services">
                                                <div>Services</div>
                                            </HashLink>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
                <div className='pf-home-des-cont'>
                    <ScrollAnimContainer className='pf-home-des-box' activeSec={'home'} animDirection='left'>
                        <div className='pf-h-des-1'>
                            <span>Hello I'm</span>
                        </div>
                        <div className='pf-h-des-2'>
                            <span>Sibsankar De</span>
                        </div>
                        <div className='pf-h-des-3 d-flex align-items-center'>
                            <span>{displayedSkill}</span> <span className='d-flex pf-beep-anim'><i className="ri-git-commit-fill" style={{rotate: 90}}></i></span>
                        </div>
                        <div className='pf-h-des-4'>Welcome to my web development portfolio! Dive into a showcase of my coding craftsmanship. Let's build something incredible together. Your vision, my code.</div>
                        <div><HashLink to="#services"><button className="btn pf-btn-vio">Hire me!</button></HashLink></div>
                    </ScrollAnimContainer>
                    <ScrollAnimContainer className='pf-home-img-box' activeSec={'home'} animDirection='bottom' >
                        <img src={require('../assets/img/my_image_resized.png')} alt="" draggable={false} onContextMenu={e => e.preventDefault()} />
                    </ScrollAnimContainer>
                </div>
                <div className='pf-home-contact-box' >
                    <ul>
                        <li><a href="mailto:sibsankarde910@gmail.com"><i className="bi bi-envelope-at-fill"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/sibsankar-de-932b55240/"><i className="bi bi-linkedin"></i></a></li>
                        <li><a href="https://github.com/Sibsankar-de"><i className="bi bi-github"></i></a></li>
                        <li><a href="https://www.facebook.com/sibsankar.de910"><i className="bi bi-facebook"></i></a></li>
                    </ul>
                </div>
            </section>
        </>
    )
}
