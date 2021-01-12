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

// const Schedule = require('../../../database/models/schedule')
// router.get('/', async (req, res) => {
//   await Schedule.find({}, (err, db) => {
//       if(!err) {
//           res.send(db)
//       }
//   })
// })

// router.post("/createAdministrator", async (req, res) => {
//   try {
//     var newAdministrator = await services.administratorServices.createAdministrator(
//       req.body
//     );
//     res.send(newAdministrator);
//   } catch (error) {
//     res.send(error);
//   }
// });

module.exports = router;