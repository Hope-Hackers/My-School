const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classStudentsSchema = new Schema(
  {
    studentId: Number,
    image: String,
    name: String,
    class: String,
    description: String,
  },
  {
    versionKey: false, // set to false then it wont create in mongodb
  }
);

module.exports = mongoose.model("classStudents", classStudentsSchema);
