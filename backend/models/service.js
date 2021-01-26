//this the scema for the service

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceShema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const Service = mongoose.model("services", ServiceShema);

module.exports = Service;
