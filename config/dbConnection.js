import mongoose from "mongoose";

require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://abheykhurana77:<password>@cluster0.ih6kulf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process
  }
};

export { connectDB };
