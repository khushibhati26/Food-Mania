import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

export const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;
  if (!mongoURI) {
    throw new Error("MONGO_URI not found in .env file");
  }

  await mongoose
    .connect(mongoURI)
    .then(() => console.log("DB connected"))
    .catch((err) => {
      console.error("DB connection error:", err);
    });
};
