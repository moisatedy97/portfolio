import React from 'react'
import Image from 'next/image';
import styles from "../../styles/Home.module.scss";
import skills from '../../assets/skills.png';
import {wolf, c, java, javascript, swift, html, css, node, react, postgress, mongo, git, github} from '../../assets'

const Brand = () => {
  return (
    <div id='skills' className={styles.tedy__brand + ' ' + styles.section__padding}>
        <div className={styles.tedy__brand__title}>
            <Image width={50} height={50} src={wolf} alt='wolf'></Image>
            <h1>Skills</h1>
        </div>
        <div className={styles.tedy__brand__image}>
            <Image src={skills} alt='skills'></Image>
        </div>
    </div>
  )
}

export default Brand