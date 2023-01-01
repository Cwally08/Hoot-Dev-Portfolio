import React from 'react'
import "./Home.scss"
import Pic from "../images/pic.png"
import skill1 from "../images/skill1.png"
import skill2 from "../images/skill2.png"
import skill4 from "../images/skill4.png"
import { Typewriter} from 'react-simple-typewriter'
const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        
        <div className="container f_flex top">
            <div className="left top">
                <h3>Welcome to my life</h3>
                <h1>Hi, I'm <span>Christian Wally Atendido</span></h1>
                <h2> a <span>
                <Typewriter
                words={[' Web Developer.', ' Front-end Developer.']}
                loop
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                
            />
            </span></h2>
            <p>I'm very ambitious front-end
                developer looking for a role in established IT company with the opportunity to work with the
                latest technologies on challenging and diverse projects.</p>
            <div className="hero_btn d_flex">
            <div className="col_1">
              <h4>Find me With</h4>
              <div className="button">
                <button className="btn_shadow">
                <a target="_blank" 
                rel='noreferrer' 
                href='https://www.facebook.com/AllSeeingEye08'>
                <img src="https://img.icons8.com/fluency/96/null/facebook-new.png"/>
                </a>
                </button>
                <button className="btn_shadow">
                <a target="_blank" 
                rel='noreferrer' 
                href='https://www.instagram.com/chrstn_wlly/'>
                <img src="https://img.icons8.com/fluency/240/null/instagram-new.png"/></a>
                </button>
                <button className="btn_shadow">
                <a target="_blank" 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/christian-wally-atendido-9205a2251/'>
                <img src="https://img.icons8.com/fluency/240/null/linkedin.png"/></a>
                </button>
              </div>
              </div>
            <div className="col-1">
              <h4>BEST SKILL ON</h4>
              <button className="btn_shadow">
              <img src={skill1} alt="" />
                </button>
                <button className="btn_shadow">
                <img src={skill2} alt="" />
                </button>
                <button className="btn_shadow">
                <img src={skill4} alt="" />
                </button>
            </div>
            </div>
        </div>
        <div className="right">
          <div className="right_img">
            <img src={Pic} alt="" />
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Home
