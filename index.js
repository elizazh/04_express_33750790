const express = require("express");
const app = express();

// Load all route handlers from routes/main.js
const mainRoutes = require("./routes/main");

// Goldsmiths proxy forwards to port 8000
const port = 8000;

// Mount our router at the site root
app.use("/", mainRoutes);

// Start the HTTP server
app.listen(port, () => {
  console.log(`Node server is running on port ${port}...`);
});
