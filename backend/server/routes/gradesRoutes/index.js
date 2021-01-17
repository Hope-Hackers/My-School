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
        res.send(newGrade);
    } catch (err) {
        res.send(err)
    }
});

module.exports = router;