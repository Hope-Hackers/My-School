const express = require("express");
const router = express.Router();
const services = require("../../models/classSchedule");

router.get("/", async (req, res) => {
  try {
    var ClassSchedules = await services.find({},{_id:0}).sort({"time":1});
    res.send(ClassSchedules);
  } catch (error) {
    console.log(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    console.log("req", req.body);
    var newClassSchedule = await services.classScheduleServices.createClassSchedule(
      req.body
    );
    res.send(newClassSchedule);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
