import express from 'express';
import dotenv from 'dotenv';
import cron from 'node-cron';
import { connectDB } from './config/db.js';
import fetchWeatherData from './utils/fetchWeather.js';
import cityRoute from './routes/cityRoute.js'
import alertRoute from './routes/alertRoute.js'
import weatherRoute from './routes/weatherRoute.js'
import logger from "morgan";
dotenv.config();
const app = express()
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/city', cityRoute)
app.use('/weather', weatherRoute)
app.use('/alert', alertRoute)
cron.schedule("*/10 * * * *", fetchWeatherData);
app.listen(8000, () => {
    console.log('server started')
    connectDB()
})