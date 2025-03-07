import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js"; // Ensure this path matches your project structure
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const createAdmin = async () => {
  const email = "a"; // Change this if needed
  const password = "a"; // Change this for security

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = new Admin({ email, password: hashedPassword });

  try {
    await admin.save();
    console.log("Admin user created successfully.");
    mongoose.disconnect();
  } catch (error) {
    console.error("Error creating admin:", error);
    mongoose.disconnect();
  }
};

createAdmin();
