const express = require("express");
const app = express();
require('dotenv').config()


const PORT = process.env.PORT

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Hello from DevOps CI/CD 🚀",
    status: "success"
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
