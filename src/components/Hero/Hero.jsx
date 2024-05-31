import React from 'react'
import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hey I'm Chris
            </h1>
            <p className={styles.description}>
                I'm a computer science student at the University of Cincinnati.
            </p>
            <a href="mailto:Laneyct@mail.uc.edu" className={styles.contactBtn}>Reach out!</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/> 
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  );
};
