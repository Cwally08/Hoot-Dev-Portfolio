import React, { useState } from "react"
import './Header.scss';
import logo from "../images/hoot.png"

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })

  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className="container d_flex">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navlink">
                
                  <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick = {() => setMobile(false)}>
                  
                    <li><a href="#home">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#skills">skills</a></li>
                    <li><a href="#portfolio">portfolio</a></li>
                    <li><a href="#resume">resume</a></li>
                    <li><a href="#contact">contact</a></li>
                    <li><button className="home-btn"><a target="_blank" 
                rel='noreferrer' 
                href='https://github.com/Cwally08'>Github</a></button></li>
                </ul>
                
            </div>
        </div>
      </header>

   
    </>
  )
}

export default Header
