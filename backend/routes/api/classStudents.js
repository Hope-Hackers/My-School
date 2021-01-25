const express = require("express");
const router = express.Router();
const services = require("../../models/classStudents");

router.get("/", async (req, res) => {
  try {
    var ClassStudents = await services.find({});
    res.send(ClassStudents);
  } catch (error) {
    console.log(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    console.log("req", req.body);
    var newClassStudent = await services.create(req.body);
    res.send(newClassStudent);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    await services.deleteOne({ _id: req.params.id });
    res.send({ status: true });
  } catch (err) {
    res.send({ err, status: false });
  }
});

router.post("/update", async (req, res) => {
  try {
    var newStudent = await services.findByIdAndUpdate({_id: req.body._id},req.body,{});
    res.send({ newStudent, status: true });
  } catch (err) {
    res.send({ err, status: false });
  }
});

module.exports = router;
