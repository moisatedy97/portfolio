import React from 'react'
import Image from 'next/image';
import styles from "../../styles/Home.module.scss";
import {wolf, instragram, facebook} from '../../assets';

const Footer = () => {
  return (
    <div id='contact' className={styles.tedy__footer + ' ' + styles.section__padding}>
        <div className={styles.tedy__footer__title}>
            <Image width={50} height={50} src={wolf} alt='wolf'></Image>
            <h1>Contact</h1>
        </div>
        <div className={styles.tedy__footer__socials}>
            <a href="https://www.instagram.com/tedymoisa/" target="_blank" rel="noreferrer"><Image width={30} height={30} src={instragram} alt='instragram'></Image></a>
            <a href="https://www.facebook.com/tedy.moisa" target="_blank" rel="noreferrer"><Image width={30} height={30} src={facebook} alt='facebook'></Image></a>
        </div>
        <div className={styles.tedy__footer__copyright}>
            <p>Copyright © 2022 Tedy Gabriel Moisa • Full Stack Developer • moisatedy@gmail.com</p>
        </div>
    </div>
  )
}

export default Footer