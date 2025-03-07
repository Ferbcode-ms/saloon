import express from "express";
import Appointment from "../models/Appointment.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// POST: Create a new appointment (Public)
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, service, date, timeSlot } = req.body;

    // Check if the slot is already booked
    const existingAppointment = await Appointment.findOne({ date, timeSlot });
    if (existingAppointment) {
      return res.status(400).json({ message: "Time slot already booked." });
    }

    const newAppointment = new Appointment({
      name,
      email,
      phone,
      service,
      date,
      timeSlot,
    });
    await newAppointment.save();

    res.status(201).json({ message: "Appointment booked successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again." });
  }
});

// GET: Fetch appointments by date (Admin only)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const { date } = req.query;
    if (!date) {
      return res.status(400).json({ message: "Date is required." });
    }

    const appointments = await Appointment.find({ date });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again." });
  }
});

// DELETE: Delete an appointment by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Appointment.findByIdAndDelete(id);
    res.status(200).json({ message: "Appointment deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error deleting appointment." });
  }
});

// Assuming you have a function to get available slots
router.get("/available-slots/:date", async (req, res) => {
  const { date } = req.params;
  try {
    // Logic to fetch available slots for the given date
    const appointments = await Appointment.find({ date });
    const bookedSlots = appointments.map((appt) => appt.timeSlot);

    // Assuming you have a predefined list of all possible time slots
    const allTimeSlots = [
      "06:00 AM - 06:40 AM",
      "06:40 AM - 07:20 AM",
      "07:20 AM - 08:00 AM",
      "08:00 AM - 08:40 AM",
      "08:40 AM - 09:20 AM",
      "09:20 AM - 10:00 AM",
      "10:00 AM - 10:40 AM",
      "10:40 AM - 11:20 AM",
      "11:20 AM - 12:00 PM",
      "12:00 PM - 12:40 PM",
      "12:40 PM - 01:20 PM",
      "01:20 PM - 02:00 PM",
      "02:00 PM - 02:40 PM",
      "02:40 PM - 03:20 PM",
      "03:20 PM - 04:00 PM",
      "04:00 PM - 04:40 PM",
      "04:40 PM - 05:20 PM",
      "05:20 PM - 06:00 PM",

      // ... other time slots
    ];

    // Filter out booked slots
    const availableSlots = allTimeSlots.filter(
      (slot) => !bookedSlots.includes(slot)
    );

    res.status(200).json(availableSlots);
  } catch (error) {
    res.status(500).json({ message: "Error fetching available slots." });
  }
});

export default router;
