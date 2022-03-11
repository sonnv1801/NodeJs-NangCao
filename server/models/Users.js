const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
  update: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", UserSchema);
