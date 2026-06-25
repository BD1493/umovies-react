import { useEffect, useState } from "react";
import styles from "./register.module.css";
export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        document.title = "Umovies || Register";
    }, []);
    function handleRegister(e) {
        e.preventDefault();
        setError("");
        if (!username.trim() || !email.trim() || !password.trim()) {
            setError("Please fill in all fields.");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }
        const users = JSON.parse(localStorage.getItem("umovies_users") || "[]");
        if (users.find(u => u.email === email.trim().toLowerCase())) {
            setError("An account with this email already exists.");
            return;
        }
        users.push({
            username: username.trim(),
            email: email.trim().toLowerCase(),
            password,
        });
        localStorage.setItem("umovies_users", JSON.stringify(users));
        window.location.href = "/login";
    }
    return (
        <>
            <div className={styles.header}>
                <div className={styles.left}>
                    <a href="/">Umovies || Register</a>
                </div>
                <div className={styles.right}>
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                    <a href="/about">About</a>
                    <a href="/tos">ToS &amp; Privacy Policy</a>
                    <a href="/movies">Movies</a>
                </div>
            </div>
            <form className={styles.login} onSubmit={handleRegister} noValidate>
                <h2 className={styles.title}>Create Account</h2>
                {error && <p className={styles.error}>{error}</p>}
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    autoComplete="username"
                />
                <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="email"
                />
                <input
                    type="password"
                    placeholder="Password (min 6 chars)"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    autoComplete="new-password"
                />
                <button type="submit">Register!</button>
                <p>Already have an account? Click <a href="/login">here</a>!</p>
            </form>
            <footer>&copy; 2026 Umovies. All Rights Reserved || <a href="/tos">Privacy Policy</a></footer>
        </>
    );
}