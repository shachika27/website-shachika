import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>
                    Let's chat!
                </h2>
                <p>
                    Reach out and let's start a creative conversation.
                </p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("email.png")} alt="e-mail icon" />
                    <a href="mailto:shachika27@gmail.com">shachika27@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("linkedin.png")} alt="LinkedIn icon" />
                    <a href="https://www.linkedin.com/in/shachika-thanigaivelu-373a76211/" target = "_blank">Linkedin/Shachika Thanigaivelu</a>
                </li>
            </ul>
        </footer>
    );
};