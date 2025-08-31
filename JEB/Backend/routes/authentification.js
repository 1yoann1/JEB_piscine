const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/register", (req, res) => {
    const {email, password} = req.body;
    db.run("INSERT INTO users (nom, email) VALUES (?, ?)", [nom, email], function(err) {
        if (err)
            return res.status(500).json({error: err.message});
        res.json({message: "Utilisateur crée", userId: this.lastID});
    });
});

router.post("/login", (req, res) => {
    const {email, password} = req.body;
    db.get("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err,rows) => {
        if (err)
            return res.status(500).json({error: err.message});
        if (rows)
            return res.status(401).json({error: "Email ou mot de passe incorrect."});
        res.json({message: "Connexion réussie", user: rows});
    });
});

module.exports = router;