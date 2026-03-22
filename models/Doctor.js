const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  fee: Number,
  availableTime: String,
});

// ✅ Correct model name
module.exports = mongoose.model("Doctor", doctorSchema);