require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.post("/register", (req, res) => {
    const {email, password} = req.body;
    res.status(201).json({email, password});
});
app.post("/login", (req, res) => {
    res.status(200).json({message: "user is login"});
});
//route error
app.use((req, res, next) => {
    res.status(404).json({
        message: "resourse not found",
    });
});
//server error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "something broke",
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
