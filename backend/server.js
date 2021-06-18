const dotenv = require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

const mongoDb = "mongodb://localhost/spinAnalyser";
mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const handHistorySchema = new mongoose.Schema({
  tournamentNumber: String,
  buyIn: String,
  rake: String,
  totalBuyIn: String,
  numberOfPlayers: String,
  prizePool: String,
  currency: String,
  dateStarted: String,
  timeStarted: String,
  timeRegion: String,
  first: String,
  second: String,
  third: String,
  result: String,
});
const handHistory = mongoose.model("Hand History", handHistorySchema);

app.listen(5000, () => console.log("listening on 5000"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/data", (req, res) => {
  const myData = new handHistory(req.body);
  myData
    .save()
    .then((item) => {
      res.send("Name saved to database");
      console.log("Success")
    })
    .catch((err) => {
      res.status(400).send("Unable to save to database");
      console.log(err)
    });
});
