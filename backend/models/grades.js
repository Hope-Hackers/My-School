const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gradesSchema = new Schema({
  name: {
    type: String,
  },
  moyenne: {
    type: Number,
  },
  maths: {
    type: Number,
  },
  sciences: {
    type: Number,
  },
  physics: {
    type: Number,
  },
});

module.exports = mongoose.model("grades", gradesSchema);
