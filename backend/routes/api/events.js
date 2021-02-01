const express = require("express");
const router = express.Router();
const events = require("../../models/Events");

router.get("/", async (req, res) => {
  try {
    var Events = await events.find({});
    res.send(Events);
  } catch (error) {
    console.log(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    console.log("req", req.body);
    var newEvent = await events.create(req.body);
    res.send(newEvent);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    await events.deleteOne({ _id: req.params.id });
    res.send({ status: true });
  } catch (err) {
    res.send({ err, status: false });
  }
});

router.post("/update", async (req, res) => {
  try {
    var newEvent = await events.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      {}
    );
    res.send({ newEvent, status: true });
  } catch (err) {
    res.send({ err, status: false });
  }
});

module.exports = router;
