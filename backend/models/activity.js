//this the scema for the Activity

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivityShema = new Schema({
  title: {
    type: "string",
    required: true,
  },
  imageUrl: {
    type: "string",
    required: true,
  },
  text: {
    type: "string",
    required: true,
  },
});

const Activity = model("activity", ActivityShema);

module.exports = Activity;
