import React from 'react'
import Image, { StaticImageData } from 'next/image';
import projects from './projects_array';
import styles from "../../styles/Home.module.scss";

type Props = {
  name: string,
  description: string,
  mainPhoto: StaticImageData,
  photos: Array<StaticImageData>
};

const Project = ({name, description, mainPhoto, photos } : Props) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{description}</h3>
      
    </div>
  )
}

export default Project