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
                src={getImageUrl("about/aboutImage.png")} 
                alt="me sitting with a laptop"
                className={styles.aboutImage}
                />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon"></img>
                    <div className={styles.aboutItemText}>
                        <h3>
                            Frontend Developer
                        </h3>
                        <p>
                            I am a frontend dev with experience in UI and optimized sites blah blah
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
                            I have experience developing fast backend systems and APIS blah
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon"></img>
                    <div className={styles.aboutItemText}>
                        <h3>
                            UI designer
                        </h3>
                        <p>
                            I have designed many designs for user interfaces with great user experiences.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
