var mongoose = require("mongoose");

// Obtendo os parametros passados pela linha de comando
var mongoURL = process.env.DB_ACCESS;

const connectDB = async () => {
  try {
    console.log(mongoURL);
    await mongoose.connect(mongoURL);
    console.log("Connect to MongoDB successfully");
  } catch (error) {
    console.log("Connect failed " + error.message);
  }
};

module.exports = connectDB;
