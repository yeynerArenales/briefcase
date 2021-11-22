import React from 'react';
import styles from '../../styles/aboutMe.module.css';

const About = () => {
    return (
      <React.Fragment>
        <div id="about" className={styles.description}>
          <p>
            Desarrollador Web. Estudiante de Ingeniería Informatica. Tengo gran conocimiento en JavaScript y PHP, me encuentro desarrollando conocimientos en Python. Experiencia en React.js y Angular JS, así mismo, en C# con .Net Core.
            <br />
            <br />
            Soy un amante de la tecnología, los video juegos y el futbol. Me encanta afrontar nuevos retos para mi crecimiento personal y profesional. Estoy dispuesto aprender nuevas técnicas o tecnologías.
          </p>
        </div>
      </React.Fragment>
    )
}

export default About;