const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classStudentsSchema = new Schema({
  studentId: {
    type: Number,
    unique: true
  },
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
  // parent: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'user'
  // }
},{
    versionKey: false // set to false then it wont create in mongodb
});

module.exports = mongoose.model("classStudents", classStudentsSchema);
