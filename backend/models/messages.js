const mongoose = require("mongoose");
const { Schema } = mongoose;

const messagesSchema = new Schema({
  senderId: String,
  receiverId: String,
  message: String,
  date: Number,
});
const Messages = mongoose.model("messages", messagesSchema);
module.exports = Messages;
