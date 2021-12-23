import React from 'react';
import styles from '../../styles/proyect.module.css';
import Image from 'next/image'
import BlockService from '../../public/blockService.png'

type ProyectProps = {
    logoUrl: string,
    widthLogo: string,
    description: string,
    siteUrl: string
}

const Proyect = ( { logoUrl, widthLogo, description, siteUrl }: ProyectProps) => {
  console.log(logoUrl)
    return (
      <React.Fragment>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image 
              src={logoUrl}
              alt="Logo Image"
              className={styles.logo}
              width={widthLogo}
              height="80px"
            />
          </div>
          <div className={styles.description}>
            {description}
          </div>
          <div className={styles.button}>
            <a href={siteUrl} target="_blank" rel="noreferrer" className={styles.link}>Visitar Sitio</a>
          </div>
        </div>
      </React.Fragment>
    )
}

export default Proyect;
