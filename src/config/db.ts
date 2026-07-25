import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["4.4.4.4", "8.8.8.8"]);

const connectDB = async (): Promise<void> => {
  if (mongoose.connection.readyState === 1) return;
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
    throw error;
  }
};

export default connectDB;
