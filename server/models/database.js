const mongoose = require("mongoose");
/**
 * Establishes a connection to MongoDB using the provided URI.
 * @param {string} mongoURI - The MongoDB connection URI.
 * @returns {Promise<void>} - A promise that resolves when the connection is successfully established.
 */
async function connectToMongoDB(mongoURI) {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

// Retrieve the MongoDB connection URI from the configuration
const mongoURI = 'mongodb+srv://matan:matan@cluster0.bgo3pus.mongodb.net/?retryWrites=true&w=majority';

// Establish the connection to MongoDB
connectToMongoDB(mongoURI);

// Set the strictPopulate option globally for Mongoose
mongoose.set("strictPopulate", false); 

module.exports = mongoose;
