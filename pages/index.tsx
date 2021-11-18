import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Title from './components/title'
import About from './components/aboutMe'
import Skills from './components/skills'
import Proyects from './components/proyects'
import Contact from './components/contact'
import logoImg from '../public/LogoYeyner.png'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yeyner Portfolio</title>
      </Head>
      <header className={styles.header}>
        <Image 
          src={logoImg}
          alt="Logo"
        />
        <div className={styles.containerLinks}>
          <a  className={styles.links}>
            Sobre Mi
          </a>
          <a href="#skills" className={styles.links}>
            Skills
          </a>
          <a className={styles.links}>
            Proyectos
          </a>
          <a className={styles.links}>
            Contacto  
          </a>          
        </div>
      </header>
      <main>
        <Title></Title>
        <About></About>
        <Skills></Skills>
        <Proyects></Proyects>
        <Contact></Contact>
      </main>
    </div>
  )
}

export default Home
