import React, { useState } from 'react';

import styles from "./Navbar.module.css";
import {getImageUrl } from "../../utils"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">SHACHiKA THANiGAiVELU</a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? getImageUrl("close_icon.png") : getImageUrl("menu_icon.png")}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)} />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href = "#work">WORK</a>
                    </li>
                    <li>
                        <a href="https://docs.google.com/document/d/1_PbhYiAEVDTEtC1edbJvVVD7MUwpawQ7FoDhsccrcnA/edit?usp=sharing" target="_blank">RESUME</a>
                    </li>
                    <li>
                        <a href="#contact">CONTACT ME</a>
                    </li>
                </ul>
            </div>
        </nav>
        );
};