const express = require("express");
const router = express.Router();
const services = require("../../models/classSchedule");

router.get("/", async (req, res) => {
  try {
    var ClassSchedules = await services.find({});
    res.send(ClassSchedules);
  } catch (error) {
    console.log(error);
  }
});

router.get("/findwithoutid", async (req, res) => {
  try {
    var ClassSchedules = await services.find({}, { _id: 0 }).sort({ time: 1 });
    res.send(ClassSchedules);
  } catch (error) {
    console.log(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    console.log("req", req.body);
    var newClassSchedule = await services.create(req.body);
    res.send(newClassSchedule);
  } catch (err) {
    console.log(err);
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
    var newClassSchedule = await services.findOneAndUpdate({_id: req.body._id},req.body,{useFindAndModify: false});
    console.log(newClassSchedule);
    res.send({ newClassSchedule, status: true });
  } catch (err) {
    res.send({ err, status: false });
  }
});

module.exports = router;
