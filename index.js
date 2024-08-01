import express from "express";
import bodyParser from "body-parser";
import blogRoutes from "./routes/blogRoutes.js";
import { connectDB } from "./config/dbConnection.js";
const app = express();

connectDB();

app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
app.use("/api", blogRoutes);

export { app };
