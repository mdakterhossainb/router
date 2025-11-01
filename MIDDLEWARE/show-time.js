require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.port || 3000;
const middleware = (req, res, next) => {
    req.currentTime = new Date(Date.now());
    next();
};
app.use(middleware);
app.get("/", (req, res) => {
    console.log("to-day time is " + req.currentTime);
    res.send(`<h1>this is get   </h1>`);
});

// app.get("/about", middleware,(req, res) => {
//     console.log("this is about " + req.currentTime);
//     res.send(`<h1>this is get   </h1>`);
// });
app.get("/login", (req, res) => {
    console.log("this is login " + req.currentTime);
    res.send(`<h1>this is get   </h1>`);
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
