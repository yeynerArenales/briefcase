import React from 'react'
import Image from 'next/image'
import styles from '../../styles/skills.module.css'
import { skills } from '../../public/skills'

const Skills = () => {
    return (
        <React.Fragment>
            <div id="skills" className={styles.container}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    {
                        skills.map(skill => {
                            return (
                                <div key={skill.name} className={styles.containerImage}>
                                    <Image
                                        src={skill.imgUrl}
                                        alt={skill.name}
                                        width='90px'
                                        height='90px'
                                        className={styles.image}
                                    />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </React.Fragment >
    )
}

export default Skills;