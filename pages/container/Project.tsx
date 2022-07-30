import React from 'react'
import Image, { StaticImageData } from 'next/image';
import ImageSlider from './ImageSlider';
import projects from '../../assets/projects_array';
import styles from "../../styles/Home.module.scss";


type Props = {
  name: string,
  description: string,
  github: string,
  mainPhoto: StaticImageData,
  photos: Array<String>
};

const Project = ({name, description, github, mainPhoto, photos } : Props) => {
  return (
    <div className={styles.tedy__project}>
      <div className={styles.tedy__project__title}>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <a href={github}>Github</a>
      </div>
      <div className={styles.tedy__project__container}>
        <div className={styles.tedy__project__container__slider}>
          <ImageSlider slides={photos} />
        </div>
        <Image width='280vh' height='500vh' src={mainPhoto} alt='lalasiaiphone'></Image>
      </div>
    </div>    
  )
}

export default Project