import React from 'react';
import styles from '../../styles/proyect.module.css';
import Image from 'next/image'
import BlockService from '../../public/blockService.png'

type ProyectProps = {
    logoUrl: string,
    widthLogo: string,
    description: string,
    siteUrl: string,
    tech: string,
    altImage: string
}

const Proyect = ( { logoUrl, widthLogo, description, siteUrl, tech, altImage }: ProyectProps) => {
  console.log(logoUrl)
    return (
      <React.Fragment>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image 
              src={logoUrl}
              alt={altImage}
              className={styles.logo}
              width={widthLogo}
              height="80px"
            />
          </div>
          <div className={styles.description}>
            {description}
            <br />
            <br />
            <p className={styles.tech}>
              {tech}
            </p>
          </div>
          <div className={styles.button}>
            <a href={siteUrl} target="_blank" rel="noreferrer" className={styles.link}>Visitar Sitio</a>
          </div>
        </div>
      </React.Fragment>
    )
}

export default Proyect;
