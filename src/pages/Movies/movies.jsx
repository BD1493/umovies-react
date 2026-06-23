import { useState } from "react";
import styles from "./movies.module.css"; // you can rename or keep your CSS

export default function Movies() {
  const [currentMovie, setCurrentMovie] = useState({
    title: "Select a movie to stream",
    src: ""
  });

  const playMovie = (title, filePath) => {
    setCurrentMovie({ title, src: filePath });
  };

  return (
    <div className={styles.pageWrapper}>
      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.left}>
          <a href="/">Umovies || Movies</a>
        </div>
        <div className={styles.right}>
          <a href="/register">Register</a>
          <a href="/login">Login</a>
          <a href="/about">About</a>
          <a href="/tos">ToS & Privacy Policy</a>
          <a href="/movies">Movies</a>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <header className={styles.topTitle}>
        <h1>Umovies Movie Library</h1>
      </header>

      <div className={styles.container}>
        <div className={styles.movieGrid}>

          {/* Zootopia */}
          <div className={styles.movieCard}>
            <div className={styles.movieTitle}>Zootopia 1</div>
            <div className={styles.movieActions}>
              <button onClick={() => playMovie("Zootopia 1", "/zootopia1.mp4")}>
                Stream
              </button>
              <a className={styles.downloadLink} href="/zootopia1.mp4" download>
                Download
              </a>
            </div>
          </div>

          {/* Harry Potter */}
          <div className={styles.movieCard}>
            <div className={styles.movieTitle}>Harry Potter 1</div>
            <div className={styles.movieActions}>
              <button onClick={() => playMovie("Harry Potter 1", "/harry-potter1.mp4")}>
                Stream
              </button>
              <a className={styles.downloadLink} href="/harry-potter1.mp4" download>
                Download
              </a>
            </div>
          </div>

          {/* Minecraft Movie */}
          <div className={styles.movieCard}>
            <div className={styles.movieTitle}>A Minecraft Movie</div>
            <div className={styles.movieActions}>
              <button onClick={() => playMovie("A Minecraft Movie", "/minecraft-movie.mp4")}>
                Stream
              </button>
              <a className={styles.downloadLink} href="/minecraft-movie.mp4" download>
                Download
              </a>
            </div>
          </div>

        </div>

        {/* PLAYER */}
        <div className={styles.player}>
          <h2>{currentMovie.title}</h2>
          <video key={currentMovie.src} controls>
            <source src={currentMovie.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* FOOTER */}
      <footer className={styles.footer}>
        © 2026 Umovies. All Rights Reserved ||
        <a href="/tos"> Privacy Policy</a>
      </footer>
    </div>
  );
}
