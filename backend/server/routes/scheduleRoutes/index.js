const express = require("express");
const router = express.Router();
const services = require("../../services");

router.get("/", async (req, res) => {
  try {
    var Schedules = await services.scheduleServices.findAllSchedules();
    res.send(Schedules);
  } catch (error) {
    res.send(error);
  }
});

router.get("/withoutid", async (req, res) => {
  try {
    var Schedules = await services.scheduleServices.findAllSchedulesWithoutId();
    res.send(Schedules);
  } catch (error) {
    res.send(error);
  }
});

router.post('/create',async (req,res) => {
  try {
    req.body.time = Number(req.body.time)
    console.log(req.body)
    var newSchedule = await services.scheduleServices.createSchedule(req.body)
    res.send(newSchedule);
  } catch (err) {
    res.send(err)
  }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        await services.scheduleServices.deleteSchedule({ _id: req.params.id })
        res.send({status:true})
    } catch (err) {
        res.send({err,status:false})
    }
})

router.post('/update', async (req, res) => {
    try {
      var newSchedule = await services.scheduleServices.updateSchedule(req.body)
      console.log(newSchedule)
        res.send({newSchedule,status:true})
    } catch (err) {
        res.send({err,status:false})
    }
})

module.exports = router;