//this the scema for the eventUser

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventUserShema = new Schema({
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

const eventUser = mongoose.model("eventUser", eventUserShema);

module.exports = eventUser;
