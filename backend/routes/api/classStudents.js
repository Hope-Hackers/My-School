const express = require("express");
const router = express.Router();
const services = require("../../models/classStudents.js");
const jwtDecode = require('jwt-decode')
const cloudinary = require("../../midelwar/cloudinary");
const upload = require('../../midelwar/multer');

router.get("/", async (req, res) => {
  try {
    var ClassStudents = await services.find({});
    res.send(ClassStudents);
  } catch (error) {
    console.log(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    var newClassStudent = await services.create(req.body);
    res.send(newClassStudent);
  } catch (err) {
    console.log(err);
  }
});

// router.post('/create', upload.single("image"), async(req, res) => {
//   try {
//     console.log(req.body.files)
//     // const resultPhoto = await cloudinary.uploader.upload(req.body.image.);
//     console.log('resultPhoto',resultPhoto);
      
//       let student = new services();
      
//         student.studentId = req.body.studentId;
//         student.image = resultPhoto.secure_url;
//         student.name = req.body.name;
//         student.class = req.body.class;
//         student.description = req.body.description;
      
//         await student.save(); // async
//         res.json({
//             status: true,
//             message: "Successfully created a new service"
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// });

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
    var newStudent = await services.findByIdAndUpdate({_id: req.body._id},req.body,{});
    res.send({ newStudent, status: true });
  } catch (err) {
    res.send({ err, status: false });
  }
});

router.post('/filterstudent', async (req, res) => {
  try { 
    var classStudents = await services.find(req.body)
    res.send({ classStudents, status: true })
  } catch (err) {
      res.send({err,status:false})
  }
})

router.post('/filter', async (req, res) => {
  try {
    req.body.studentId = Number(req.body.studentId)
    var classStudents = await services.findOne({studentId:req.body.studentId})
    res.send({ classStudents, status: true })
  } catch (err) {
      res.send({err,status:false})
  }
})


module.exports = router;
