import React from 'react'
import styles from "../../styles/Home.module.scss";
import Project from './Project';
import projects from './projects_array';

const Projects = () => {
  return (
    <div id='projects' className={styles.tedy__projects}>
        {projects.map((res, index) => {              
          return <Project key={res.id} name={res.name} description={res.description} mainPhoto={res.mainPhoto} photos={res.photos}/>
        })}
    </div>
  )
}

export default Projects