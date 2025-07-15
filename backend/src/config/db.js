import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connect succcessfully!");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
    process.exit(1); // Exit with failure
  }
};
