import React from 'react'
import Image from 'next/image'
import styles from '../../styles/skills.module.css'
import javascriptImage from '../../public/javascript.png'
import typescriptImage from '../../public/typescript_2.png'
import nodeImage from '../../public/nodejs.png'
import cImage from '../../public/c.png'
import reactImage from '../../public/react.png'
import angularImage from '../../public/angular.png'
import expressImage from '../../public/express.png'
import netImage from '../../public/net.png'
import nextImage from '../../public/next.png'

import mongoImage from '../../public/mongodb.png'
import mySqlImage from '../../public/mysql.png'
import postgreImage from '../../public/postgre.png'

const Skills = () => {
    return (
      <React.Fragment>
        <div id="skills" className={styles.container}>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.skills}>
                <div className={styles.containerImage}>
                    <Image
                    src={javascriptImage}
                    alt="Javascript Image"
                    className={styles.image}
                    />
                </div>
                <div className={styles.containerImage}>
                    <Image
                    src={nodeImage}
                    alt="Node Js Image"
                    className={styles.image}
                    />
                </div>
                <div className={styles.containerImage}>
                    <Image
                    src={cImage}
                    alt="C# Image"
                    className={styles.image}
                    />
                </div>
                <div className={styles.containerImage}>
                    <Image
                    src={typescriptImage}
                    alt="TypeScript Image"
                    className={styles.image}
                    />
                </div>
                <div className={styles.containerImage}>
                    <Image
                    src={reactImage}
                    alt="React Image"
                    className={styles.image}
                    />
                </div>
                {/* <div className={styles.containerImage}>
                    <Image
                    src={nextImage}
                    alt="Next Image"
                    className={styles.image}
                    />
                </div>
                <div className={styles.containerImage}>
                    <Image
                    src={netImage}
                    alt=".Net Image"
                    className={styles.image}
                    />
                </div> */}
                <div className={styles.containerImage}>
                    <Image
                    src={expressImage}
                    alt="Express Image"
                    className={styles.image}
                    />
                </div>
                <div className={styles.containerImage}>
                    <Image
                    src={angularImage}
                    alt="Angular Image"
                    className={styles.image}
                    />
                </div>
                <div className={styles.containerImage}>
                    <Image
                    src={mongoImage}
                    alt="Mongo Image"
                    className={styles.image}
                    />
                </div>
                <div className={styles.containerImage}>
                <Image
                src={postgreImage}
                alt="Postgre Image"
                className={styles.image}
                />
                </div>
                <div className={styles.containerImage}>
                <Image
                src={mySqlImage}
                alt="MySql Image"
                className={styles.image}
                />
                </div>
            </div>
        </div>
      </React.Fragment>
    )
}

export default Skills;