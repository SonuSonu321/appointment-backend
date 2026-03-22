const Doctor = require("../models/Doctor");

// CREATE doctor
exports.createDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET all doctors
exports.getDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};

// UPDATE doctor
exports.updateDoctor = async (req, res) => {
  const doctor = await Doctor.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(doctor);
};

// DELETE doctor
exports.deleteDoctor = async (req, res) => {
  await Doctor.findByIdAndDelete(req.params.id);
  res.json({ msg: "Doctor deleted" });
};