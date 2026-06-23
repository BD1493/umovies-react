import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.pageWrapper}>
      {/* HEADER */}
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

      {/* CONTENT */}
      <div className={styles.container}>
        <h1>About Umovies</h1>
        <p>
          Umovies is a simple, fast, and clean movie platform built for users who
          want an easy way to browse, explore, and enjoy movies without the clutter.
        </p>
        <p>
          Our mission is to deliver a smooth, modern, neon‑themed cinematic
          experience that feels futuristic and fun.
        </p>
        <p>
          Whether you're streaming movies or exploring new content, Umovies is
          designed to be lightweight, responsive, and enjoyable for everyone.
        </p>
      </div>

      {/* FOOTER */}
      <footer className={styles.footer}>
        © 2026 Umovies. All Rights Reserved ||
        <a href="/tos"> Privacy Policy</a>
      </footer>
    </div>
  );
}
