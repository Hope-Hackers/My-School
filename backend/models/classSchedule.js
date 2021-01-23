const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classScheduleSchema = new Schema({
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
    }
},{
    versionKey: false // set to false then it wont create in mongodb
});

module.exports = mongoose.model("classSchedule", classScheduleSchema);