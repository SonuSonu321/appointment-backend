const express = require("express");
const router = express.Router();

const appointmentController = require("../controllers/appointmentController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// User books appointment
router.post("/", appointmentController.bookAppointment);

// Admin sees all appointments
router.get("/", protect, adminOnly, appointmentController.getAllAppointments);

// Doctor sees their appointments
router.get("/:doctorId", appointmentController.getDoctorAppointments);

router.get("/user/:email", appointmentController.getUserAppointments);

module.exports = router;