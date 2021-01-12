const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactsSchema = new Schema({
  name: String,
  Lname: String,
  email: String,
  message: String,
});
const Contact = mongoose.model("contacts", contactsSchema);
module.exports = Contact;
