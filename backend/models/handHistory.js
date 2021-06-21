import mongoose from "mongoose";

const handHistorySchema = new mongoose.Schema(
  {
    tournamentNumber: { type: String, required: true, unique: true },
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
  },
  { timestamps: true }
);

const handHistoryModel = mongoose.model("Hand History", handHistorySchema);

export { handHistoryModel };
