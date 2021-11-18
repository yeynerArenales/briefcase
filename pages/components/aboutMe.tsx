import React from 'react';
import styles from '../../styles/aboutMe.module.css';

const About = () => {
    return (
      <React.Fragment>
        <div className={styles.description}>
          <p>
            Estudiante de Ingenieria Informatica. Desarrollador Web. Tengo conocimientos en JavaScript. Poseo experiencia en Angular.js y React.js como frameworks frontend. En el backend cuento con conocimientos en C# utilizando .Net core y PostgreSQL, asi mismo, poseo conocimientos en Node.js con el framework express y MongoDB. Actualmente me encuentro desarrollando conocimientos en el framework nest.js.
            <br />
            <br />
            Soy un amante de la tecnología, me encanta afrontar nuevos retos para mi crecimiento personal y profesional. Estoy dispuesto aprender nuevas técnicas o tecnologías. Amante de los video juegos, futbol y F1.
          </p>
        </div>
      </React.Fragment>
    )
}

export default About;