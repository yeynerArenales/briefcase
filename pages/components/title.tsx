
import React from 'react';
import styles from '../../styles/title.module.css';

const Title = () => {
    return (
      <React.Fragment>
        <div className={styles.title}>
          <h1>
            Yeyner Arenales
          </h1>
        </div>
        <div className={styles.subtitle}>
          <h2>
            Web Developer
          </h2>
        </div>
      </React.Fragment>
    )
}

export default Title;
