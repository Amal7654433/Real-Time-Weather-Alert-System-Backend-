import express from "express";
import City from "../models/city.js";

const router = express.Router();

// POST /cities - Add a new city to the monitoring list
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;

    // Check if city name is provided
    if (!name) {
      return res.status(400).json({ success: false, message: "City name is required." });
    }

    // Check if the city already exists
    const existingCity = await City.findOne({ name });
    if (existingCity) {
      return res.status(409).json({ success: false, message: "City already exists." });
    }

    // Save new city
    const city = new City({ name });
    await city.save();

    res.status(201).json({ success: true, message: "City added successfully.", city });

  } catch (error) {
    console.error("Error adding city:", error);
    res.status(500).json({ success: false, message: "Server error.", error: error.message });
  }
});

// DELETE /cities/:city - Remove a city from the monitoring list
router.delete("/:city", async (req, res) => {
  try {
    const cityName = req.params.city;

    // Check if the city exists
    const city = await City.findOneAndDelete({ name: cityName });

    if (!city) {
      return res.status(404).json({ success: false, message: "City not found." });
    }

    res.status(200).json({ success: true, message: `City "${cityName}" removed successfully.` });

  } catch (error) {
    console.error("Error deleting city:", error);
    res.status(500).json({ success: false, message: "Server error.", error: error.message });
  }
});

export default router;

