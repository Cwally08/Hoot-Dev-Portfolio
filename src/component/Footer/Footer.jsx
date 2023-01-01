import React from "react"
import logo from "../images/hoot.png"
import "./Footer.scss"
const Footer = () => {
  return (
    <>
      <section className="footer" id="footer">
        <div className="text text-center">
        <div className='img'>
            <img src={logo} alt='' />
          </div>
          <h5>Designed & Built by Christian Wally Atendido</h5>
          <p>© 2022. All rights reserved by Hoot Dev.</p>
          </div>
      </section>
    </>
  )
}

export default Footer