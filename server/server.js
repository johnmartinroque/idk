const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

// Set up express app
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // To parse JSON requests

// PostgreSQL connection setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Test route to ensure server is working
app.get("/", (req, res) => {
  res.send("Hello from Express Server!");
});

// API endpoint to fetch data from PostgreSQL
app.get("/data", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM your_table");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data from PostgreSQL");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
