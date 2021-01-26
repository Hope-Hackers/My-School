const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());
const eventUser = require("../../models/eventUser");

//------------ get all service ----------------

router.get("/", async (req, res) => {
  try {
    const eventUsers = await eventUser.find();
    if (!eventUsers) throw new Error("No service to display Err !");
    const sorted = eventUsers.sort((a, b) => {
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
    const myEventUser = await eventUser.find({ creator: id });
    if (!myEventUser) throw new Error("No service to display Err !");
    const mysorted = myEventUser.sort((a, b) => {
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
    const oneEventUser = await eventUser.findById(id);
    if (!oneEventUser) throw new Error("No service to display Err !");
    res.status(200).json(oneEventUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//------------ create an service ------------------

router.post("/", async (req, res) => {
  const newEventUser = new eventUser(req.body);
  try {
    const eventUsercreate = await newEventUser.save();
    if (!eventUsercreate)
      throw new Error("creation creation opperation failed !");
    res.status(200).json(eventUsercreate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//--------------- delete service --------------------

router.delete("/:id", async (req, res) => {
  console.log("heere");
  try {
    const { id } = req.params;
    await eventUser.findByIdAndDelete(id);
    const event = await eventUser.find({});
    res.status(200).json(event);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

//------------ export module ---------------
module.exports = router;
