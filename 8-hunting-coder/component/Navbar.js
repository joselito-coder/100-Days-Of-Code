import Link from 'next/link'
import React from 'react'
import styles from "@/styles/styles.module.css"


const Navbar = () => {
    return (
        <nav className={styles.mainNav}>
            <ul>
                <Link href="/">
                    <li>Home</li>
                </Link>

                <Link href="/about">
                    <li>About</li>
                </Link>

                <Link href="/blog">
                    <li>Blog</li>
                </Link>

                <Link href="/contact" scroll={false}>
                    <li>Contact</li>
                </Link>

            </ul>
        </nav>


    )
}

export default Navbar