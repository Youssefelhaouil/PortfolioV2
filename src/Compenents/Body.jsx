import React from 'react'
import AboutMe from "./AboutMe"
import Contact from "./Contact"
import HeroSection from "./HeroSection"
import Projects from "./Projects"
import Technologies from "./Technologies"

function Body({isDark}) {
    return (
        <>
            <HeroSection isDark={isDark} />
            <AboutMe isDark={isDark} />
            <Technologies isDark={isDark} />
            <Projects isDark={isDark} />
            <Contact isDark={isDark} />

        </>
    )
}

export default Body
