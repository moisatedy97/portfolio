import React from 'react'
import Image from 'next/image';
import styles from "../../styles/Home.module.scss";
import Project from './Project';
import projects from '../../assets/projects_array';
import wolf from '../../assets/wolf.png'

const Projects = () => {
  return (
    <div id='projects' className={styles.tedy__projects + ' ' + styles.section__padding}>
      <div className={styles.tedy__projects__title}>
        <Image width={50} height={50} src={wolf} alt='wolf'></Image>
        <h1>Projects</h1>
      </div>
        {projects!.map((res, index) => {              
          return <Project key={res.id} name={res.name} description={res.description} github={res.github} mainPhoto={res.mainPhoto} photos={res.photos}/>
        })}
    </div>
  )
}

export default Projects