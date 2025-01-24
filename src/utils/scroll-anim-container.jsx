import React from 'react'
import { useEffect, useState } from 'react';
import { useActiveSection } from '../hooks/activeSection'
import { useScrollPosition } from '../hooks/scrollPosition';

export const ScrollAnimContainer = ({ children, className = String, animDirection = String, activeSec = String }) => {
    
    const scrollPosition = useScrollPosition()

    const activeSection = useActiveSection();
    const [contVisible, setContVisible] = useState(false);
    useEffect(()=>{
        if (scrollPosition === 0 && activeSec!=='home') setContVisible(false);
    }, [scrollPosition])

    useEffect(() => {
        if (activeSection === activeSec) setContVisible(true);
        
    }, [activeSection])
    return (
        <section className={`${className} ${contVisible && `pf-${animDirection}-intro`} ${!contVisible && 'pf-visibility-hide'}`}>
            {children}
        </section>
    )
}
