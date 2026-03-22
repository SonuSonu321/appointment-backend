const express = require("express");
const router = express.Router();

const {
  createDoctor,
  getDoctors,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/doctorController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

// Public
router.get("/", getDoctors);

// Admin only
router.post("/", protect, adminOnly, createDoctor);
router.put("/:id", protect, adminOnly, updateDoctor);
router.delete("/:id", protect, adminOnly, deleteDoctor);

module.exports = router;