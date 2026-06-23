import { useEffect } from "react";
import styles from "./register.module.css";
const users = [
    {
        username: "umovies.com",
        email: "umovies@umovies.com",
        password: "byebye1493"
    },
];
export default function Register() {
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
                alert("Registeration succsesfull")
                window.location.href = "../login/login.jsx"
            }
            else {
                alert("invalid email or password")
                alert("The email must be umovies@umoives.com")
                alert("The password must be byebye1493")
            }
        };
    }, []);
    return (
        <>
            <div className={styles.header}>
                <div className={styles.left}>
                    <a href="../../../index.html">Umovies</a>
                </div>
                <div className={styles.right}>
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                    <a href="/about">About</a>
                    <a href="/tos">ToS & Privacy Policy</a>
                </div>
            </div>

            <div className={styles.login}>
                <input type="email" required placeholder="Enter umovies@umovies.com" id="email-inp" />
                <input type="password" required placeholder="Enter byebye1493" id="password-inp" />
                <button id="login-btn">Login!</button>
                <p>Already have an account yet? Click <a href="/tos">here</a>!</p>
            </div>
            <footer>&copy; 2026 Umovies. All Rights Reserved || <a href="../tos/index.js">Privacy Policy</a></footer>
        </>);

}