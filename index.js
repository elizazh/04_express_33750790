const express = require("express");
const app = express();
const mainRoutes = require("./routes/main");

const port = 8000; // Goldsmiths proxy needs 8000
app.use("/", mainRoutes);

app.listen(port, () => {
  console.log(`Node server is running on port ${port}...`);
});
