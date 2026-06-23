import { useEffect } from "react";
import styles from "./login.module.css";
const users = [
    {
        username: "umovies.com",
        email: "umovies@umovies.com",
        password: "byebye1493"
    },
];
export default function Login() {
    useEffect(() => {
        document.title = "Umovies || Login"
    }, []);
    useEffect(() => {
        const vemail = users[0].email
        const vpass = users[0].password
        document.getElementById("login-btn").onclick = function () {
            let email = document.getElementById("email-inp").value.trim();
            let password = document.getElementById("password-inp").value.trim()

            if (!email || !password) {
                alert("Please enter both username and password")
                return;
            }
            if (email == vemail && password == vpass) {
                alert("Login succsesfull")
                window.location.href = "/movies"
            }
            else {
                alert("invalid email or password")
                alert("The email is umovies@umoives.com")
                alert("The password is byebye1493")
            }
        };
    }, []);
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
                    <a href="/tos">ToS & Privacy Policy</a>
                    <a href="/movies">Movies</a>
                </div>
            </div>

            <div className={styles.login}>
                <input type="email" required placeholder="Enter umovies@umovies.com" id="email-inp" />
                <input type="password" required placeholder="Enter byebye1493" id="password-inp" />
                <button id="login-btn">Login!</button>
                <p>Don't have an account yet? Click <a href="/register">here</a>!</p>
            </div>
            <footer>&copy; 2026 Umovies. All Rights Reserved || <a href="/tos">Privacy Policy</a></footer>
        </>);

}