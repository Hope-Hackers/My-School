const express = require("express");
const router = express.Router();
const services = require("../../services");

router.get("/", async (req, res) => {
  try {
    var Schedules = await services.scheduleServices.findAllSchedulesWithoutId();
    res.send(Schedules);
  } catch (error) {
    res.send(error);
  }
});

router.post('/create',async (req,res) => {
  try {
    console.log('req',req.body)
    var newSchedule = await services.scheduleServices.createSchedule(req.body)
    res.send(newSchedule);
  } catch (err) {
    res.send(err)
  }
})

module.exports = router;