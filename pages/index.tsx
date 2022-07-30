import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from './container/Navbar'
import Header from './container/Header'
import Brand from './container/Brand'
import Footer from './container/Footer'
import Projects from './container/Projects'

const Home: NextPage = () => {
  return (
    <>
    <div className={styles.gradient__bg}>
      <Navbar></Navbar>
      <Header></Header>
      <Brand></Brand>
      <Projects></Projects>
      <Footer></Footer>
    </div>
    </>
  )
}

export default Home
