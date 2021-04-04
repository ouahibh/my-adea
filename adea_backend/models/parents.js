const mongoose = require("mongoose");

const parentSchema = mongoose.Schema({
  adress: {
    type: String,
    required: true,
  },
  telNumber: {
    type: Number,
    required: true,
  },
  assurance: {
    type: Number,
    required: true,
    unique: true,
  },
  UserID: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Parent", parentSchema);
