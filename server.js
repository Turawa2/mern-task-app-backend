// server.js
const express = require("express");
const connectDB = require("./config/connectDB");
const taskRoute = require("./routes/taskRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: ["http://localhost:3000", "https://mern-task-app.onrender.com"]
}));

// Use taskRoute as middleware
app.use("/api/tasks",taskRoute);

// Overall starter
const startServer = async () => {
  try {
    await connectDB(); // Wait for database connection
    // Starting server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
