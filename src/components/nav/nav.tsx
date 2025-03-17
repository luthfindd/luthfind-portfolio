"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav (){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">Luthfi ND</Link>
            </div>

            <ul className={`${styles.menu} ${isOpen ? styles.openMenu : ""}`}>
                <li><Link href="#Home">Home</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#Experience">Experience</Link></li>
                <li><Link href="#Projects">Projects</Link></li>
                <li><Link href="#Contacts">Contact</Link></li>
            </ul>

            <i className="ri-menu-4-line" id={styles.bars} onClick={toggleMenu}></i>
        </nav>
    );
};
