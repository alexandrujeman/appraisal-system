const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the API" });
});

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/appraisal", require("./routes/appraisal"));

// Node connection
const hostname = "0.0.0.0";
const PORT = process.env.PORT || 4000;

app.listen(PORT, hostname, () => {
  console.log(`Listening on ${hostname} 
Waiting for connections on ${PORT} 
Server started.`);
});
