const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  userName: String,
  email: String,
  mobile: String,
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor"
  },
  time: String
});

module.exports = mongoose.model("Appointment", appointmentSchema);