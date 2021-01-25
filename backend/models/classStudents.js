const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classStudentsSchema = new Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    class: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    versionKey: false, // set to false then it wont create in mongodb
  }
);

module.exports = mongoose.model("classStudents", classStudentsSchema);
