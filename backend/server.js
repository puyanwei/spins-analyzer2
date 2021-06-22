import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { handHistoryModel } from "./models/handHistory.js";

const app = express();
app.use(cors());

const mongoDb = "mongodb://localhost/spinAnalyser";
mongoose.connect(mongoDb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on("error", (error) =>
  console.error("MongoDB connection error:")
);

app.listen(5000, () => console.log("listening on 5000"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/data", async (req, res) => {
  try {
    const handHistory = await handHistoryModel(req.body);
    const ret = await handHistory.save()
    res.json(ret)
    console.log("Success - Hand Submitted, Tournament ID #", req.body.tournamentNumber)
  } catch (error) {
    res.status(500).send("Unable to save to database");
    console.log(error);
  }
});

app.get("/data", async (req, res) => {
  try {
    const handHistories = await handHistoryModel.find();
    res.send(handHistories);
  } catch (error) {
    res.status(500).send("Unable to get data");
    console.log(error);
  }
});
