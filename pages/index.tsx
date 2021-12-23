import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Title from './components/title'
import About from './components/aboutMe'
import Skills from './components/skills'
import ListOfProyects from './components/listOfProyects'
import Contact from './components/contact'
import logoImg from '../public/LogoYeyner.png'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yeyner Portfolio</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.containerImage}>
          <Image 
            src={logoImg}
            alt="Logo"
          />
        </div>
        <div className={styles.containerLinks}>
          <a href="#about" className={styles.links}>
            Sobre Mi
          </a>
          <a href="#skills" className={styles.links}>
            Skills
          </a>
          <a href="#proyects" className={styles.links}>
            Proyectos  
          </a> 
          <a href="#contact" className={styles.links}>
            Contacto  
          </a>          
        </div>
      </header>
      <main>
        <Title></Title>
        <About></About>
        <Skills></Skills>
        <ListOfProyects></ListOfProyects>
        <Contact></Contact>
      </main>
    </div>
  )
}

export default Home
