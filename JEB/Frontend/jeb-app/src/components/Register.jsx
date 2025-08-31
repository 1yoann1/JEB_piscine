import React, { use, useState } from "react";
import "./Login.css";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Veuillez entrer une adresse email valie.");
            return;
        }
        if (password !== confirmPassword) {
            alert("Les mots de passes ne sont pas identiques.");
            return;
        }
        alert("Votre compte a été crée!")
    };
    return (
        <div>
            <h1 id="pageIitle">Créer un compte</h1>
            <div id="loginBox">
                <h1>CREER VOTRE COMPTE</h1>
                <form id="createForm" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <label htmlFor="password">Mot de Passe :</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <label htmlFor="confirmPassword">Confirmer votre mot de passe :</label>
                    <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                    <button type="submit">Créer le compte</button>
                </form>
            </div>
        </div>
    );
}