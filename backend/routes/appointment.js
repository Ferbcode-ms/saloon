import express from "express";
import Appointment from "../models/Appointment.js";

const router = express.Router();

// Get appointments by date
router.get("/", async (req, res) => {
  const { date } = req.query;
  try {
    const appointments = await Appointment.find({ date });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
