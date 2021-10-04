const mongoose = require("mongoose");

//create a expam schema
const examSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  length: {
    type: Number,
    require: true,
  },
  totalSteps: {
    type: Number,
    require: true,
  },
  activeStep: {
    type: Number,
    require: true,
  },
  updated: {
    type: String,
    require: true,
  }
});

module.exports = Exams = mongoose.model("exam", examSchema, "data");
