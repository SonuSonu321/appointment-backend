const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Admin Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin123") {
    const token = jwt.sign(
      { role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({ token });
  }

  res.status(401).json({ msg: "Invalid admin credentials" });
});

module.exports = router;