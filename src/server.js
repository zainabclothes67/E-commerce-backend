const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes");
const { errorHandler } = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");

const app = express();
app.set("trust proxy", 1);

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001", "https://zainab-store.vercel.app", "https://www.zainabclothes.store", "https://zainabclothes.store"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "x-guest-id"],
  exposedHeaders: ["x-guest-id"],
}));

app.use(express.json());
app.use(cookieParser());

app.use("/", router);
app.use(errorHandler);

const PORT = Number(process.env.PORT) || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to database:", error.message);
    process.exit(1);
  });

module.exports = app;
