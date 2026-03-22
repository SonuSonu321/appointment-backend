const Appointment = require("../models/Appointment");

// ✅ BOOK APPOINTMENT
exports.bookAppointment = async (req, res) => {
  try {
    const { userName, email, mobile, doctorId, time } = req.body;

    const appointment = await Appointment.create({
      userName,
      email,
      mobile,
      doctorId,
      time,
    });

    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ GET ALL APPOINTMENTS (ADMIN)
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate("doctorId");
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ GET DOCTOR APPOINTMENTS
exports.getDoctorAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      doctorId: req.params.doctorId,
    }).populate("doctorId");

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ GET USER APPOINTMENTS (NEW 🔥)
exports.getUserAppointments = async (req, res) => {
  try {
    const { email } = req.params;

    const appointments = await Appointment.find({ email }).populate("doctorId");

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};