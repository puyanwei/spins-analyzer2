import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import { handHistoryModel } from "./models/handHistory.js";

const app = express();
app.use(cors());

const mongoDb = "mongodb://localhost/spinAnalyser";
mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", (error) => console.error("MongoDB connection error:"));

app.listen(5000, () => console.log("listening on 5000"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/data", (req, res) =>
  new handHistoryModel(req.body)
    .save()
    .then((item) => {
      res.send("Name saved to database");
      console.log("Success");
    })
    .catch((err) => {
      res.status(400).send("Unable to save to database");
      console.log(err);
    })
);
