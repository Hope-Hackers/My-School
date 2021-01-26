const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },

  password: {
    type: String,
  },
  isTeacher: {
    type: Number,
    unique: true,
  },
});
const teacher = mongoose.model("teachers", teacherSchema);
module.exports = teacher;
