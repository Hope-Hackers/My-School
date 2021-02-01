const mongoose = require("mongoose");
const config = require("config");
// const db = config.get("mongoURI");
const db = "mongodb+srv://school:zs23101995@cluster0.nuv5y.mongodb.net/school";
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MongDB Connected :D");
  } catch (err) {
    console.log(err.mesage);
    // Close server with failure.
    process.exit(1);
  }
};

module.exports = connectDB;
