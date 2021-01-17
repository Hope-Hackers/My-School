const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

//DATABASE CONNECTION
const db = require("../database");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/administrators", routes.administratorRoutes);
app.use("/api/users", routes.userRoutes);
app.use("/api/schedule", routes.scheduleRoutes);
app.use("/api/grades", routes.gradesRoutes);

var server = app.listen(PORT, (err) => {
  if (!err) {
    console.log(`App Is Listetning On Port: ${PORT}`);
  }
});
