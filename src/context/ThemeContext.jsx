import React, { createContext, useEffect, useState } from 'react'
import { handleThemeChange } from '../utils/theme-handle';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('dark');
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setCurrentTheme(savedTheme);
        }
        else{
            localStorage.setItem('theme', currentTheme)
        }
    }, [])
    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;
