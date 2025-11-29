import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { dbName: "testDB" })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Simple API route
app.get("/", (req, res) => {
  res.send("Backend working! 🚀");
});

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
