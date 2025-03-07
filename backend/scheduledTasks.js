import cron from "node-cron";
import Appointment from "./models/Appointment.js"; // Adjust the import based on your file structure
// import mongoose from "mongoose";

// Schedule a task to run every day at midnight
cron.schedule("0 0 * * *", async () => {
  try {
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3); // Set the date to three days ago

    // Delete appointments older than three days
    const result = await Appointment.deleteMany({
      date: { $lt: threeDaysAgo },
    });
    console.log(`Deleted ${result.deletedCount} old appointments.`);
  } catch (error) {
    console.error("Error deleting old appointments:", error);
  }
});
