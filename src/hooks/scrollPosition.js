import { useState, useEffect } from "react";

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const scrollPosHandler = () => setScrollPosition(window.scrollY)
        window.addEventListener('scroll', scrollPosHandler)
        return () => window.removeEventListener('scroll', scrollPosHandler)
    }, [])

    return scrollPosition;
}

export { useScrollPosition }