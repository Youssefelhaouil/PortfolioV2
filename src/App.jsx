import React, { useState, useEffect } from "react"
import AboutMe from "./Compenents/AboutMe"
import Contact from "./Compenents/Contact"
import Header from "./Compenents/Header"
import HeroSection from "./Compenents/HeroSection"
import Projects from "./Compenents/Projects"
import Technologies from "./Compenents/Technologies"


function App() {
  const [isDark, setIsDark] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(()=>{

    if(isDark){
      document.body.classList.add('bg-dark-blue')
      document.body.classList.remove('bg-white')

    }else{
      document.body.classList.add('bg-white')
      document.body.classList.remove('bg-dark-blue')
    }

  },[isDark])



  return (
    <>
      <Header isDark={isDark}
      setIsDark={setIsDark} menu={menu} setMenu={setMenu} />
      <HeroSection isDark={isDark} />
      <AboutMe isDark={isDark}/>
      <Technologies  isDark={isDark}/>
      <Projects isDark={isDark}/>
      <Contact  isDark={isDark}/>

    </>
  )
}

export default App
