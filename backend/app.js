require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/routes.js");

const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors("*"));

app.get("/", (req, res) => {
    res.status(200).send("API working..!")
});

app.use("/api", routes);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
