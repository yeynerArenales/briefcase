
import React from 'react';
import styles from '../../styles/listOfProyects.module.css';
import Proyect from './proyect';
import { proyects } from '../../public/proyects.json';

const ListOfProyects = () => {
  console.log({proyects})
    return (
      <React.Fragment>
        <div id='proyects'>
          <h2 className={styles.title}>
            Proyectos
          </h2>
          <div className={styles.list}>
            {
              proyects.map(proyect => <Proyect
                logoUrl={proyect.logoUrl} 
                widthLogo={proyect.widthLogo} 
                siteUrl={proyect.siteUrl}
                description={proyect.description} 
                key={proyect.name}
                tech={proyect.tech}
                altImage={proyect.name}
                ></Proyect>)
            }
          </div>
        </div>
      </React.Fragment>
    )
}

export default ListOfProyects;
