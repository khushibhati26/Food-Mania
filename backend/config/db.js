import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://manaswirajsharma1001:aRvwsrT4saQsSl2j@cluster0.tyyv761.mongodb.net/tomato"
    )
    .then(() => console.log("DB connected"));
};
