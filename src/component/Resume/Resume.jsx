import React from "react"
import "./Resume.scss"
import ResumeApi from "./ResumeApi"
import Card from "./Card"

const Resume = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            
            <h1>Curriculum Vitae</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                
                <h1 className="text">Education </h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}

                {/*<div className='box btn_shadow'>
                  <div className='title_content d_flex'>
                    <div className='title'>
                      <h2>University of Rizal System Cainta Campus</h2>
                      <span>(2019 - 2023)</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>5/5</button>
                    </div>
                  </div>
                  <hr />
                  <p> Bachelor of Science in Information Technology</p>
                </div>*/}
              </div>
            </div>
            <div className='left'>
              <div className='heading'>
                
                <h1 className="text">Webinars/Seminars</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume