import React from "react";
 import './style.scss';
 import logo1 from "../logos/html.png"
 import logo2 from "../logos/css.png"
 import logo3 from "../logos/react.png"
 import logo4 from "../logos/javascript.png"
 import logo5 from "../logos/angular.png"
 import logo6 from "../logos/mui.png"
 import logo7 from "../logos/bootstrap.png"
 import logo8 from "../logos/sass.png"
 import logo9 from "../logos/git.png"
 import logo10 from "../logos/mongodb.png"
 import logo11 from "../logos/firebase.png"
 import logo12 from "../logos/graphql.png"
 import { Typewriter} from 'react-simple-typewriter'
 
 function SkillsBar () {
    return (
        <>
        
        <section className="skills" id="skills">
        
        <div className="heading text-center">
                <h4>Skills</h4>
                <h1>Technical Skill</h1>
        </div>
        <div className="grid1">
        
            <div className="box">
                
                <h1>Technologies I'm using in creating</h1>
                <h1><u>
            <Typewriter
                words={[' Frontend.', ' Backend.']}
                loop
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                
            /></u>
            </h1>
            
                <div className="all">
                <div className="log">
                <img src={logo1} alt="" />
                <h4>HTML</h4>
                </div>
                <div className="log">
                <img src={logo2} alt="" />
                <h4>CSS</h4>
                </div>
                <div className="log">
                <img src={logo8} alt="" />
                <h4>SASS</h4>
                </div>
                <div className="log">
                <img src={logo3} alt="" />
                <h4>ReactJs</h4>
                </div>
                <div className="log">
                <img src={logo4} alt="" />
                <h4>JavaScript</h4>
                </div>
                <div className="log">
                <img src={logo5} alt="" />
                <h4>Angular</h4>
                </div>
                <div className="log">
                <img src={logo6} alt="" />
                <h4>MUI</h4>
                </div>
                <div className="log">
                <img src={logo7} alt="" />
                <h4>Bootstrap</h4>  
                </div>
                <div className="log">
                <img src={logo10} alt="" />
                <h4>MongoDB</h4>  
                </div>
                <div className="log">
                <img src={logo11} alt="" />
                <h4>Firebase</h4>  
                </div>
                <div className="log">
                <img src={logo12} alt="" />
                <h4>Graphql</h4>  
                </div>
                <div className="log">
                <img src={logo9} alt="" />
                <h4>Git</h4>  
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    )
 }

 export default SkillsBar;