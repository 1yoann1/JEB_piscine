const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Backend Working!");
});

const authRoutes = require("./routes/authentification")
app.use("auth", authRoutes);

app.listen(port, () => {
    console.log(`Serveur en écoute sur le port: ${port}`);
});