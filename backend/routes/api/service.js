const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());
const Service = require("../../models/service");

//------------ get all service ----------------

router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    if (!services) throw new Error("No service to display Err !");
    const sorted = services.sort((a, b) => {
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
    const myServices = await Service.find({ creator: id });
    if (!myServices) throw new Error("No service to display Err !");
    const mysorted = myServices.sort((a, b) => {
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
    const oneservice = await Service.findById(id);
    if (!oneservice) throw new Error("No service to display Err !");
    res.status(200).json(oneservice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//------------ create an service ------------------

router.post("/", async (req, res) => {
  const newService = new Service(req.body);
  try {
    const servicecreate = await newService.save();
    if (!servicecreate)
      throw new Error("creation creation opperation failed !");
    res.status(200).json(servicecreate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//--------------- delete service --------------------

router.delete("/:id", async (req, res) => {
  console.log("heere");
  try {
    const { id } = req.params;
    await Service.findByIdAndDelete(id);
    const services = await Service.find({});
    res.status(200).json(services);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

//------------ export module ---------------
module.exports = router;
