import React from 'react';
import { Grid } from '@material-ui/core';
import './Projects.css';
import Flash from 'react-reveal/Flash'
import ProjectItem from './ProjectItem';
import projectData from './Projectdata';
const Projects = () => {
   return (
      <>
         <main className="project_wrapper">
            <Flash>
               <h3 className="text-center pt-5">Here some of my projects</h3>
            </Flash>
            <section
               className="project container">
               <Grid container
                  spacing={2}
                  justify="center">
                  {
                     projectData.map(project => <ProjectItem project={ project}/>)
                  }
               </Grid>
            </section>
         </main>
      </>
   );
};

export default Projects;