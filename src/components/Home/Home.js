import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'
import Jump from 'react-reveal/Jump'
import Typical from 'react-typical';
import avator from './avator.jpg';
import './Home.css';
import {FaFacebook} from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import {SiLinkedin} from "react-icons/si"
const Home = () => {
   const expertise=["I am ",2000, "I am a MERN Stack Developer",3000,  "My passion is coding",3000, "I am a Learner",3000, `I can provide pixel  perfect design`,3000]
   return (
   
      <main className="content_wrapper">
         <div className="section_wrapper">
            <div className="wrapper">
               <div className="img_wrapper">
                  <Zoom>
                     <img src={avator} alt="" />
                  </Zoom>
               </div>
            </div>
            <div className="wrapper">
               <div>
                  <Zoom left cascade>
                     <h1>Nihar </h1>
                  </Zoom>
               </div>
               <div>
                  <Zoom right cascade>
                     <h1>Mondal</h1>
                  </Zoom>
               </div>
               </div>
               <p className="expertice_text">
                  <Jump>
                     <Typical
                        loop={Infinity}
                        steps={expertise}
                     />
                  </Jump>
               </p>
            
               <div className="wrapper contact">
                  
                  <Fade bottom>

                     <a target="blank" href="https://www.facebook.com/nihar.mondol.58/"><FaFacebook/></a>

                  </Fade>
   
                  <Fade top>
                     <a target="blank" href="https://github.com/NiharMondal"> <AiFillGithub/> </a>
                  </Fade>
                  <Fade right>
                  <a target="blank" href="https://www.linkedin.com/in/nihar-mondal-2726a61b1/"> <SiLinkedin/> </a>
                  </Fade>
               </div>
            </div>
         </main>
   );
};

export default Home;