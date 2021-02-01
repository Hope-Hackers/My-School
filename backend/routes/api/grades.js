const express = require("express");
const router = express.Router();
const services = require("../../models/grades");

router.get("/", async (req, res) => {
  try {
<<<<<<< HEAD
    var Grades = await services.find({});
=======
    var Grades = await services.find({}, { _id: 0 });
>>>>>>> main
    res.send(Grades);
  } catch (error) {
    res.send(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    console.log("req", req.body);
    var newGrade = await services.create(req.body);
    res.send({ newGrade, status: true });
  } catch (err) {
    res.send(err);
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
    var newGrade = await services.findOneAndUpdate(
      { _id: req.body._id },
<<<<<<< HEAD
      req.body,
      { useFindAndModify: false }
=======
      req.body
>>>>>>> main
    );
    res.send({ newGrade, status: true });
  } catch (err) {
    res.send({ err, status: false });
  }
});
<<<<<<< HEAD
router.post("/filter", async (req, res) => {
  try {
    var grades = await services.findOne(req.body)
    res.send(grades)
  } catch (err) {
    res.send({ err, status: false });
  }
});
=======

>>>>>>> main
module.exports = router;
