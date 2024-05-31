import React from 'react';
import styles from "./About.module.css";
import {getImageUrl} from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>
            About
        </h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("hero/skateboardChris.png")} 
                alt="me sitting with a laptop"
                className={styles.aboutImage}
                />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon"></img>
                    <div className={styles.aboutItemText}>
                        <h3>
                            Frontend Developement
                        </h3>
                        <p>
                            I have worked on front end development in Angular, as well as this website was done in React
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="server icon"></img>
                    <div className={styles.aboutItemText}>
                        <h3>
                            Backend Developer
                        </h3>
                        <p>
                            I have some experience using Node.JS for backend logic, as well as Java and C# for functionality
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon"></img>
                    <div className={styles.aboutItemText}>
                        <h3>
                            Databases
                        </h3>
                        <p>
                            I have minimal experience in databases but am interested in furthering my ability
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
