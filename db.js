var mongoose = require("mongoose");

// Obtendo os parametros passados pela linha de comando
var userArgs = process.argv.slice(2);
var mongoURL = userArgs[0];

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
