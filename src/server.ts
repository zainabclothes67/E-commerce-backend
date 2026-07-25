import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import router from "./routes";
import { errorHandler } from "./middleware/errorHandler";
import cookieParser from "cookie-parser";

const app = express();
app.set("trust proxy", 1);

connectDB();

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001", "https://zainab-store.vercel.app"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "x-guest-id"],
  exposedHeaders: ["x-guest-id"],
}));

app.use(express.json());
app.use(cookieParser());
app.use("/", router);
app.use(errorHandler);

const PORT: number = Number(process.env.PORT) || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
