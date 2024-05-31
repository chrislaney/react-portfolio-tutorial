import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}><h2>Contact</h2><p>Thanks for visiting!</p></div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"></img>
                <a href='mailto:Laneyct@mail.uc.edu'>Laneyct@mail.uc.edu</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" ></img>
                <a href='https://www.linkedin.com/in/chrislaney1234'>Linkedin</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Email Icon"></img>
                <a href='https://github.com/chrislaney?tab=overview&from=2024-05-01&to=2024-05-30'>Github</a>
            </li>
        </ul>
    </footer>
  );
};
