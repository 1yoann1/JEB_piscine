import React, { use, useState } from "react";
import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailNormRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailJebRegex = /^[^\s@]+@jeb\.[^\s@]+$/;
        const emailStartupRegex = /^[^\s@]+@start\.[^\s@]+$/;

        if (!emailNormRegex.test(email) && !emailJebRegex.test(email) && !emailStartupRegex.test(email)) {
            alert("Veuillez entrer une adresse email valide.");
            return;
        }
        if (password.trim() === "") {
            alert("Veuillez entrer votre mot de passe.");
            return;
        }
        alert("Connexion réussie !");
    };

    return (
        <div>
            <h1 id="pageTitle">JEB PROJECT</h1>
            <div id="loginBox">
                <h1>LOGIN PAGE</h1>
                <form id="loginForm" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <label htmlFor="password">Mot de passe :</label>
                    <input type="password" id="pass" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <button type="submit">Se connecter</button>
                </form>
            </div>
        </div>
    );
}