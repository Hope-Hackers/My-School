const express = require("express");
const router = express.Router();
const services = require("../../models/schedule");

router.get("/", async (req, res) => {
  try {
    var Schedules = await services.find({}).sort({ Time: 1 });
    res.send(Schedules);
  } catch (error) {
    res.send(error);
  }
});

router.get("/withoutid", async (req, res) => {
  try {
    var Schedules = await services.find({}, { _id: 0 }).sort({ Time: 1 });
    res.send(Schedules);
  } catch (error) {
    res.send(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    var newSchedule = await services.create(req.body);
    res.send(newSchedule);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    await services.deleteOne({_id: req.params.id});
    res.send({ status: true });
  } catch (err) {
    res.send({ err, status: false });
  }
});

router.post("/update", async (req, res) => {
  try {
    var newSchedule = await services.findOneAndUpdate({_id: req.body._id},req.body,{useFindAndModify: false});
    console.log(newSchedule);
    res.send({ newSchedule, status: true });
  } catch (err) {
    res.send({ err, status: false });
  }
});

module.exports = router;
