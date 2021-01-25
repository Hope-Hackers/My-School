const express = require("express");
const router = express.Router();
const services = require("../../services");

router.get("/", async (req, res) => {
  try {
    var ClassSchedules = await services.classScheduleServices.findAllClassSchedules();
    res.send(ClassSchedules);
  } catch (error) {
    console.log(error);
  }
});

router.get("/findwithoutid", async (req, res) => {
  try {
    var ClassSchedules = await services.classScheduleServices.findAllClassSchedulesWithoutId();
    res.send(ClassSchedules);
  } catch (error) {
    console.log(error);
  }
});


router.post('/create',async (req,res) => {
  try {
    console.log('req',req.body)
    var newClassSchedule = await services.classScheduleServices.createClassSchedule(req.body)
    res.send(newClassSchedule);
  } catch (err) {
    console.log(err)
  }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        await services.classScheduleServices.deleteClassSchedule({ _id: req.params.id })
        res.send({status:true})
    } catch (err) {
        res.send({err,status:false})
    }
})

router.post('/update', async (req, res) => {
    try {
      var newClassSchedule = await services.classScheduleServices.updateClassSchedule(req.body)
        console.log(newClassSchedule)
        res.send({newClassSchedule,status:true})
    } catch (err) {
        res.send({err,status:false})
    }
})

module.exports = router;