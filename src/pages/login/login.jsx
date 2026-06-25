import { useEffect, useState } from "react";
import styles from "./login.module.css";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        document.title = "Umovies || Login";
    }, []);
    function handleLogin(e) {
        e.preventDefault();
        setError("");
        if (!email.trim() || !password.trim()) {
            setError("Please enter both email and password.");
            return;
        }
        const users = JSON.parse(localStorage.getItem("umovies_users") || "[]");
        const match = users.find(
            u => u.email === email.trim().toLowerCase() && u.password === password
        );
        if (match) {
            localStorage.setItem("umovies_session", JSON.stringify({ username: match.username, email: match.email }));
            window.location.href = "/movies";
        } else {
            setError("Invalid email or password.");
        }
    }
    return (
        <>
            <div className={styles.header}>
                <div className={styles.left}>
                    <a href="/">Umovies || Login</a>
                </div>
                <div className={styles.right}>
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                    <a href="/about">About</a>
                    <a href="/tos">ToS &amp; Privacy Policy</a>
                    <a href="/movies">Movies</a>
                </div>
            </div>
            <form className={styles.login} onSubmit={handleLogin} noValidate>
                <h2 className={styles.title}>Sign In</h2>
                {error && <p className={styles.error}>{error}</p>}
                <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="email"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
                <button type="submit">Login!</button>
                <p>Don&apos;t have an account yet? Click <a href="/register">here</a>!</p>
            </form>
            <footer>&copy; 2026 Umovies. All Rights Reserved || <a href="/tos">Privacy Policy</a></footer>
        </>
    );
}