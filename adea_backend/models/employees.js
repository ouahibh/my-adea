const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  adress: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
  },
  telNumber: {
    type: Number,
    required: true,
  },
  post: {
    type: String,
  },
  daeOfHiring: {
      type: String,
  },
  assurance: {
    type: Number,
    required: true,
    unique: true,
  },
  ccpNumber: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
