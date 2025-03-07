import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import "./scheduledTasks.js"; // Import the scheduled tasks
import errorHandler from "./middleware/errorMiddleware.js";
import compression from "compression";

const app = express();
app.use(express.json());

// CORS configuration
app.use(
  cors({
    origin: `${process.env.FRONTEND_URL}`,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/admin", adminRoutes);
app.use("/appointments", appointmentRoutes);
app.use(compression());

// Connect to MongoDB without deprecated options
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Salon Booking API is running...");
});

const PORT = process.env.PORT || 5000;

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
