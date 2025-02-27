import mongoose from "mongoose";

const AlertSchema = new mongoose.Schema({
    city: String,
    type: String,
    timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Alert", AlertSchema);