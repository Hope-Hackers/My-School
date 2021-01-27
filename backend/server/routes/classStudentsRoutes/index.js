const express = require("express");
const router = express.Router();
const services = require("../../services");

router.get("/", async (req, res) => {
  try {
    var ClassStudents = await services.classStudentsServices.findAllClassStudents();
    res.send(ClassStudents);
  } catch (error) {
    console.log(error);
  }
});

router.post('/create',async (req,res) => {
  try {
    console.log('req',req.body)
    var newClassStudent = await services.classStudentsServices.createClassStudent(req.body)
    res.send(newClassStudent);
  } catch (err) {
    console.log(err)
  }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        await services.classStudentsServices.deleteStudent({ _id: req.params.id })
        res.send({status:true})
    } catch (err) {
        res.send({err,status:false})
    }
})

router.post('/update', async (req, res) => {
    try {
        var newStudent = await services.classStudentsServices.updateStudent(req.body)
        res.send({newStudent,status:true})
    } catch (err) {
        res.send({err,status:false})
    }
})

router.post('/filter', async (req, res) => {
    try {
      var classStudents = await services.classStudentsServices.findClassStudents(req.body)
        res.send({classStudents,status:true})
    } catch (err) {
        res.send({err,status:false})
    }
})

module.exports = router;