const express = require("express");
const app = express();
const port = 3000;
// app.get("/", (req, res) => {
//     console.log(req.headers);
//     console.log("token : ", req.headers["token"]);
//     res.send("bismillah");
// });
// app.get("/s", (req, res) => {
//     console.log(req.method);
//     console.log(req.url);
//     console.log(req.query);
//     const {name, age, coder} = req.query;
//     res.send(`${name}===${age}====${coder}`);
// });
// app.get("/book/:code/:product", (req, res) => {
//     const {code} = req.params;
//     const {product} = req.params;
//     console.log(code);
//     console.log(product);
//     res.send(`book code is ${code} and product ${product}`);
// });

// app.get("/b/:m/:t", (req, res) => {
//     const {m, t} = req.params;
//     console.log(m, t);
//     res.send(`tis is mobile ${m} and ${t}`);
// });
app.post("/submit", (req, res) => {
    const data = req.body;
    console.log(data);
    res.send("response");
});
// app.post("/upload", upload.single("file"), (req, res) => {
//     console.log(req.file);
//     res.json({
//         massage: "file upload successfully!",
//     });
// });

app.listen(port, () => {
    console.log(`server is   at http://localhost:${port}`);
});
