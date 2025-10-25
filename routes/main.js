
const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => res.send("Hello World!"));
router.get("/about", (req, res) => res.send("<h1>This is the about page</h1>"));
router.get("/contact", (req, res) =>
  res.send("<h1>Contact</h1><p>Eliza Hussain — ehuss003@gold.ac.uk</p>")
);
router.get("/date", (req, res) => res.send(`<h1>Date</h1><p>${new Date()}</p>`));

router.get("/welcome/:name", (req, res) =>
  res.send(`<h1>Welcome, ${req.params.name}!</h1>`)
);

router.get(
  "/chain",
  (req, res, next) => { req.msg = "first → "; next(); },
  (req, res) => res.send(`<p>${req.msg}second</p>`)
);

router.get("/file", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "a.html"))
);

module.exports = router;
