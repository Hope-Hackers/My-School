const express = require("express");
const router = express.Router();
const services = require("../../services");

router.get("/", async (req, res) => {
  try {
    var Grades = await services.gradesServices.findAllGradesWithoutId();
    res.send(Grades);
  } catch (error) {
    res.send(error);
  }
});

router.post('/create', async (req, res) => {
    try {
        console.log('req', req.body)
        var newGrade = await services.gradesServices.createGrade(req.body)
        res.send({newGrade,status:true});
    } catch (err) {
        res.send(err)
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        await services.gradesServices.deleteGrade({ _id: req.params.id })
        res.send({status:true})
    } catch (err) {
        res.send({err,status:false})
    }
})

router.post('/update', async (req, res) => {
    try {
        var newGrade = await services.gradesServices.updateGrade(req.body)
        res.send({newGrade,status:true})
    } catch (err) {
        res.send({err,status:false})
    }
})

module.exports = router;