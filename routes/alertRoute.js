import express from "express";
import Alert from "../models/alert.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const alerts = await Alert.find().sort({ timestamp: -1 });

    if (!alerts.length) {
      return res.status(404).json({ success: false, message: "No alerts found." });
    }

    console.log(alerts, "Fetched alerts successfully");
    res.status(200).json({ success: true, message: "Alerts retrieved successfully", data: alerts });

  } catch (error) {
    console.error("Error fetching alerts:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
});

export default router;

