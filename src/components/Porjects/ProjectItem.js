import { Grid } from '@material-ui/core';
import React from 'react';
import './ProjectItem.css';
import Fade from 'react-reveal/Fade'
const ProjectItem = ({ project }) => {
   
   return (
      <>
         <Grid item md={4} sm={6} xs={12}>
            <div className="py-5 px-2 text-center ">
               <div
                  className="single_project_wrapper">
                  <Fade bottom>
                     <div className='bg-light p-1 rounded'>
                        <img className="project_img rounded"
                           src={project.img} alt="" />
                        <h2 className="py-2">{project.title}</h2>
                        <p>{project.description}</p>
                        <div className=" d-flex justify-content-around project_link">
                           <a target="blank"
                              className="bg-light px-3 py-2 rounded" href={project.github}>Github</a>
                           <a target="blank"
                              className="bg-light px-4 py-2 rounded" href={project.live}>Live</a>
                        </div>
                     </div>
                  </Fade>
               </div>
            </div>
         </Grid>
      </>
   );
};

export default ProjectItem;