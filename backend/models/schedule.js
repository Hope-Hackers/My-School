const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  time: {
    type: Number,
  },
  monday: {
    type: String,
  },
  tuesday: {
    type: String,
  },
  wednesday: {
    type: String,
  },
  thursday: {
    type: String,
  },
  friday: {
    type: String,
  },
  saturday: {
    type: String,
  },
});

module.exports = mongoose.model("schedule", scheduleSchema);
