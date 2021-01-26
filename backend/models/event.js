const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  author: String,
  body: String,
  img: String,
  date: { type: Date, default: Date.now },
});

const Event = mongoose.model("events", eventSchema);
module.exports = Event;
