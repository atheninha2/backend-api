const express = require("express");
const app = express();
const connectDB = require("./db.js");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "HEAD, GET, POST, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

connectDB();

const PORT = 3000;

const routes = require("./routes/routes");

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});

module.exports = app;
