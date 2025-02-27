import express from 'express'
import  Weather from '../models/weather.js'

const router = express.Router();

router.get("/", async (req, res) => {
  const weatherData = await Weather.find().sort({ timestamp: -1 });
  console.log(weatherData,'this is data')
  res.json(weatherData);
});



export default router;