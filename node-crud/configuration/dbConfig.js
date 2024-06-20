const mongoose = require("mongoose");

const connectedToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/crud_db");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`MongoDB connection error: ${error}`);
  }
};

module.exports = { connectedToMongoDB };
