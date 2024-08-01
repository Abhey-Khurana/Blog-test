import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://abheykhurana77:6zqMc31xMwaZXG7f@cluster0.ih6kulf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process
  }
};

export { connectDB };
