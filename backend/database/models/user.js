const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
    },
    childId: {
      type: String,
      unique: true,
    },
    password: String,
    role: String,
    // classStudents: [{
    //   type: Schema.Types.ObjectId,
    //   ref: 'classStudents'
    // }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
