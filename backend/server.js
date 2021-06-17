const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.listen(5000, () => console.log("listening on 5000"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/data", (req, res) => console.log(req.body));
