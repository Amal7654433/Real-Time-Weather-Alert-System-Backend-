import mongoose from "mongoose";
const WeatherSchema = new mongoose.Schema({
    city: String,
    temperature: Number,
    condition: String,
    timestamp: { type: Date, default: Date.now },
  });
  
  const Weather= mongoose.model("Weather", WeatherSchema);
  export default Weather