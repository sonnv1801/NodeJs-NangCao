const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodSchema = Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
    max: 30,
  },
  des: {
    type: String,
  },
  quality: {
    type: Number,
    required: true,
    trim: true,
  },
  resources: {
    type: String,
    require: true,
  },
  vote: {
    type: String,
  },
});

module.exports = mongoose.model("foods", FoodSchema);
