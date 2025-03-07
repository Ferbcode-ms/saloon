import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: String, required: true }, // Storing date as 'YYYY-MM-DD' string
  timeSlot: { type: String, required: true }, // Example: "10:00 AM - 11:00 AM"
});

export default mongoose.model("Appointment", appointmentSchema);
