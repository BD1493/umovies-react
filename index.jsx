import { useEffect } from "react";
import styles from "./index.module.css";
export default function Home() {
    useEffect(() => {
        document.title = "Umovies || Home"
    }, []);
    return (
        <>

            <div className={styles.header}>
                <div className={styles.left}>
                    <a href="/">Umovies || Home</a>
                </div>
                <div className={styles.right}>
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                    <a href="/about">About</a>
                    <a href="/tos">ToS & Privacy Policy</a>
                </div>
            </div>
            <section className={styles.section}>
                <h2>About Umovies</h2>
                <p>
                    Umovies is a simple, fast, and clean movie platform built for users who
                    want an easy way to browse, explore, and enjoy movies without the
                    clutter. Our goal is to create a smooth, modern experience with a
                    neon‑themed cinematic design that feels fun and futuristic.
                </p>
                <p>
                    Whether you're logging in to access your dashboard or just exploring
                    the site, Umovies is designed to be lightweight, responsive, and easy
                    to use for everyone.
                </p>
            </section>


            <section className={styles.section}>
                <h2>How to Register</h2>
                <p>Creating an account on Umovies is quick and easy:</p>
                <ol>
                    <li>Click the <strong>Register</strong> button at the top right.</li>
                    <li>Fill in your username, email, and password.</li>
                    <li>Submit the form to create your account.</li>
                    <li>After registering, you can log in anytime using your credentials.</li>
                </ol>
                <p>
                    Ready to get started?
                    <a href="register" className={styles.link}> Register here.</a>
                </p>
            </section>
            <footer>&copy; 2026 Umovies. All Rights Reserved || <a href="./pages/tos/index.html">Privacy Policy</a></footer>
        </>);

};