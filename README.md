
Real-Time Weather Alert System
-----------------------------------------------------------------
Overview

This project is a Real-Time Weather Alert System built with Node.js, Express, and MongoDB. It fetches real-time weather data, processes alerts based on predefined conditions, and stores historical data in a database.
-----------------------------------------------------------------------------------------------
Features

Fetches real-time weather data from a public API (e.g., OpenWeatherMap)
Monitors multiple cities for weather changes
Triggers alerts based on conditions (Rain, High/Low Temperature)
Stores weather data and alerts in MongoDB
REST API for retrieving weather data and alerts
Uses node-cron for scheduled data fetching
----------------------------------------------------------------------------------
Technologies Used

Backend: Node.js, Express.js
Database: MongoDB (Mongoose ORM)
Scheduler: node-cron
API: OpenWeatherMap API (or any public weather API)
Environment Variables: dotenv
