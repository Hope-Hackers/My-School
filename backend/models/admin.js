const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  isAdmin: {
      type:Number,
    unique: true,
  },
});

const admin = mongoose.model("admins", adminSchema);
module.exports = admin;
