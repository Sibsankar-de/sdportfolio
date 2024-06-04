import { useEffect, useState } from "react";

const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handelScroll = () => {
            const homeSec = document.getElementById('home').offsetTop / 1.205
            const aboutSec = document.getElementById('about').offsetTop / 1.205
            const skillSec = document.getElementById('skills').offsetTop / 1.205
            const projectsSec = document.getElementById('projects').offsetTop / 1.205
            const servicesSec = document.getElementById('services').offsetTop / 1.205

            const scrollPos = window.scrollY;

            if (scrollPos < aboutSec) setActiveSection('home')
            else if (scrollPos >= aboutSec && scrollPos < skillSec) setActiveSection('about')
            else if (scrollPos >= skillSec && scrollPos < projectsSec) setActiveSection('skills')
            else if (scrollPos >= projectsSec && scrollPos < servicesSec) setActiveSection('projects')
            else if (scrollPos >= servicesSec) setActiveSection('services')
        }
        window.addEventListener('scroll', handelScroll)
        return () => window.removeEventListener('scroll', handelScroll)
    }, [])

    return activeSection
} 

export {useActiveSection}