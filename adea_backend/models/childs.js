const mongoose = require("mongoose");

const childSchema = mongoose.Schema({
  fullName: {
    type: String,
  },
  firstName: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  placeOfBirth: {
    type: String,
  },
  diagnosticBy: {
    type: String,
  },
  bloodGroup: {
    type: String,
  },
  comorbidity: {
    type: String,
  },
  // Pour lier chaque enfant à son père et/ou sa mère 
  childOf: {
    type: String,
  },
});

module.exports = mongoose.model("Child", childSchema);
