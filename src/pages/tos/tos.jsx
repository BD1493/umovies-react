import styles from "./tos.module.css";

export default function Tos() {
  return (
    <div className={styles.pageWrapper}>
      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.left}>
          <a href="/">Umovies || ToS</a>
        </div>
        <div className={styles.right}>
          <a href="/register">Register</a>
          <a href="/login">Login</a>
          <a href="/about">About</a>
          <a href="/tos">ToS & Privacy Policy</a>
          <a href="/movies">Movies</a>
        </div>
      </div>

      {/* CONTENT */}
      <div className={styles.container}>
        <h1>Terms of Service & Privacy Policy</h1>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Umovies. By using our platform, you agree to follow our
          Terms of Service and Privacy Policy.
        </p>

        <h2>2. User Responsibilities</h2>
        <p>
          Users must not misuse the platform, attempt unauthorized access, or
          distribute harmful content.
        </p>

        <h2>3. Privacy Policy</h2>
        <p>
          We respect your privacy. Umovies does not sell or misuse your personal
          information. Basic data may be used to improve user experience.
        </p>

        <h2>4. Content Usage</h2>
        <p>
          All movies and media on Umovies are for personal use only. Redistribution
          or commercial use is not allowed.
        </p>

        <h2>5. Changes to Terms</h2>
        <p>
          Umovies may update these terms at any time. Continued use means you
          accept the updated terms.
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
