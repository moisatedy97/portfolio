import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/wolf.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styles from "../../styles/Home.module.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={styles.tedy__navbar + " " + styles.section__padding}>
        <div>
            <Image width={50} height={50} src={logo} alt='logo'></Image>
        </div>
        <div className={styles.tedy__navbar__links}>
            <p><a href="#home">Home</a></p>
            <p><a href="#skills">Skills</a></p>
            <p><a href="#projects">Projects</a></p>
            <p><a href="#contact">Contact</a></p>
        </div>
        <div className={styles.tedy__navbar__menu}>
          {toggleMenu ? <RiCloseLine color='#000000' size={27} onClick={() => setToggleMenu(false)}/> : <RiMenu3Line color='#000000' size={27} onClick={() => setToggleMenu(true)}/>}
          {toggleMenu && (
            <div className={styles.tedy__navbar__menu__container}>
              <div className={styles.tedy__navbar__menu__container__links}>
                <p><a href="#home">Home</a></p>
                <p><a href="#skills">Skills</a></p>
                <p><a href="#projects">Projects</a></p>
                <p><a href="#contact">Contact</a></p>
              </div>
            </div>
          )}
        </div>
    </div>
  );
};

export default Navbar;
