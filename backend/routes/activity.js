const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());
const Activity = require("../../models/activity");

//------------ get all service ----------------

router.get("/", async (req, res) => {
  try {
    const activitys = await Activity.find();
    if (!activitys) throw new Error("No service to display Err !");
    const sorted = activitys.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    res.status(200).json(sorted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//------------ get My service ----------------

router.get("/", async (req, res) => {
  const { id } = req.params;
  try {
    const myActivity = await Activity.find({ creator: id });
    if (!myActivity) throw new Error("No service to display Err !");
    const mysorted = myActivity.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    res.status(200).json(mysorted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//------------ get one service ----------------

router.get("/", async (req, res) => {
  const { id } = req.params;
  try {
    const oneactivity = await Activity.findById(id);
    if (!oneactivity) throw new Error("No service to display Err !");
    res.status(200).json(oneactivity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//------------ create an service ------------------

router.post("/", async (req, res) => {
  const newActivity = new Activity(req.body);
  try {
    const activitycreate = await newActivity.save();
    if (!activitycreate)
      throw new Error("creation creation opperation failed !");
    res.status(200).json(activitycreate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//--------------- delete service --------------------

router.delete("/", async (req, res) => {
  try {
    const { id } = req.params;
    const delActivity = await Activity.findByIdAndDelete(id);
    if (!delActivity) throw new Error(" deletion service not done !");
    res.status(200).json(delActivity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//------------ export module ---------------
module.exports = router;
