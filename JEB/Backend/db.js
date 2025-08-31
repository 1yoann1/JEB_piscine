const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.sqlite", (err) => {
    if (err) {
        console.log("Erreur de Connexion à la base de données", err.message);
    } else {
        console.log("Connexion à la base de donnée réussie!");
    }
});

db.run(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    )
    `
);

module.exports = db;