require("dotenv").config();

const express = require("express");
const path = require("path");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is required.");
}

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false
});

app.use(express.json({ limit: "128kb" }));
app.use(express.static(__dirname));

app.post("/api/inquiries", async (req, res) => {
  const name = String(req.body.name || "").trim();
  const email = String(req.body.email || "").trim().toLowerCase();
  const petName = String(req.body.petName || "").trim();
  const message = String(req.body.message || "").trim();

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Name, email, and message are required."
    });
  }

  try {
    await pool.query(
      `INSERT INTO pawsitive_inquiries (name, email, pet_name, message)
       VALUES ($1, $2, $3, $4)`,
      [name, email, petName, message]
    );

    return res.status(201).json({ saved: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Could not save your message. Please try again."
    });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

async function initializeDatabase() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS pawsitive_inquiries (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      pet_name TEXT,
      message TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'new',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE INDEX IF NOT EXISTS pawsitive_inquiries_created_at_idx
      ON pawsitive_inquiries(created_at DESC);
  `);
}

initializeDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Pawsitive Playhouse server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to initialize database.", error);
    process.exit(1);
  });
