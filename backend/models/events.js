const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Events = new Schema(
  {
    title: String,
    author: String,
    body: String,
    img: String,
    date: { type: Date, default: Date.now },
  },
  {
    versionKey: false, // set to false then it wont create in mongodb
  }
);

module.exports = mongoose.model("Events", Events);
