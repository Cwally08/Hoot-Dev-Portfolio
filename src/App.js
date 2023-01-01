import React, { useEffect, useState } from 'react'
import Header from "./component/Head/Header"
import Home from "./component/Hero/Home"
import About from "./component/About/About"
import Portfolio from "./component/Portfolio/Portfolio"
import Skills from "./component/Skills/SkillsBar"
import Resume from "./component/Resume/Resume"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer/Footer"
import Particle from "./component/Particle";
import "./App.css"
const App = () => {
  
 

  const [backToTopButton, setBackToTopButton] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setBackToTopButton(true) 
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])
  const scrollUp = () => {
    window.scrollTo({
      top: 0
    })
  }
  
  return (
    
    <>
    
    <Header />
    <Home />
    <About />
    <Skills />
    <Portfolio />
    <Resume />
    <Contact />
    <Footer />
    <Particle />
    {backToTopButton && (
    <div onClick={scrollUp} className="scrollTop"><img src="https://img.icons8.com/external-doodle-bomsymbols-/91/null/external-design-doodle-web-design-device-set-1-doodle-bomsymbols--24.png"/></div>
    )}
    </>
    
    
  )
}

export default App
