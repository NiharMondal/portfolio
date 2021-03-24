import React from 'react';
import { Grid } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import avator from './avator.jpg'
import './About.css';
const mySkills = [
   "Javascript", "React.js", "Botstrap", "React-bootstrap", "Material UI", "Firebase", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "Redux.js", "Sass", "HTML5", "CSS3"
];
const expertise = ["Javascript", "React.js", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "Firebase", "HTML5", "CSS3", "Bootstrap", "React-Bootstrap", "Material UI"];
const About = () => {
   return (
      <>
         <main className="container" >
            <Grid container
               className="about_wrapper">
               <Grid item md={6}
                  className="left_side">
                  <div className="control_img">
                     <Jump top>
                        <img src={avator} alt="" />
                     </Jump>
                  </div>
                  <br/>
                  <Fade left>
                  <h5>MERN Stack Developer. Built according to the latest web standards.</h5>
                  </Fade>
                  <Fade right>
                  <p className="info">My name is Nihar Mondal. I spacialise in creating beautiful, usable, professional websites, using React.js.</p>
                  </Fade>
               </Grid>
               <Grid item md={6} xs={12}
                  className="right_side">
                  <div style={{display:"flex", flexDirection:"column"}}>
                     <h2>My Skills </h2>
                     <div>
                        {
                           mySkills.map((skill, index) => {
                           
                              return (
                                 <Fade left>
                                    <p key={'skill' + index} className="skill_design">
                                    
                                    {skill}
                              
                                 </p>
                                 </Fade>
                                 
                              )
                              
                           })
                           
                        }
                        
                     </div>
                     
                  </div><br />
                  <div style={{display:"flex", flexDirection:"column"}}>
                     <h2>Feel free to work with</h2>
                     <div>
                        {
                           expertise.map((skill, index) => {
                           
                              return (
                                 <Fade right>
                                     <p key={'skill' + index} className="skill_design">{skill}</p>
                                 </Fade>
                                 
                              )
                              
                           })
                           
                        }
                        
                     </div>
                     
                  </div><br />
                  
                 
               </Grid>
            </Grid>
         </main>
      </>
   );
};

export default About;