import mongoose from 'mongoose';
 
const handHistorySchema = new mongoose.Schema(
  {
    tournamentNumber: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },
);
 
const handHistory = mongoose.model('handHistory', handHistorySchema);
 
export default handHistory;