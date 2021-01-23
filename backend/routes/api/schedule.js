const express = require("express");
const router = express.Router();
const services = require("../../models/schedule");

router.get("/", async (req, res) => {
  try {
    var Schedules = await services.find({},{_id:0}).sort({"Time":1});
    res.send(Schedules);
  } catch (error) {
    res.send(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    console.log("req", req.body);
    var newSchedule = await services.create(req.body);
    res.send(newSchedule);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
