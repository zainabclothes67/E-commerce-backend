const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["4.4.4.4", "8.8.8.8"]);

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 10000,
  });
  console.log(`MongoDB Connected: ${conn.connection.host}`);
  return conn;
};

module.exports = connectDB;
