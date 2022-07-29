import React from 'react'
import Image from 'next/image'
import code2 from '../../assets/code2.png'
import react from '../../assets/react.png'
import styles from "../../styles/Home.module.scss";

const Header = () => {
  return (
    <div id='home' className={styles.tedy__header + ' ' + styles.section__padding}>
        <div className={styles.tedy__header__title}>
            <h3>Hey, I&#8217;m</h3>
            <h1>Tedy Gabriel Moisa</h1>
        </div>
        <div className={styles.tedy__header__react}>
          <Image width='100%' height='100%' src={react} alt='react'></Image>
        </div>
        <div className={styles.tedy__header__image}>
          <Image width='100%' height='100%' layout='fill' src={code2} alt='code2'></Image>
        </div>
    </div>
  )
}

export default Header