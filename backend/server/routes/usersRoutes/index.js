const express = require("express");
const router = express.Router();
const services = require("../../services");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../../database/models/user");


const { check, validationResult } = require("express-validator");

router.get("/", async (req, res) => {
  try {
    var Users = await services.userServices.findAllUsers();
    res.send(Users);
  } catch (error) {
    res.send(error);
  }
});

// router.post("/createUser", async (req, res) => {
//   try {
//     var newUser = await services.userServices.createUser(req.body);
//     res.send(newUser);
//   } catch (error) {
//     res.send(error);
//   }
// });

router.post("/createUser", [
  check("firstName", "firstName is required").not().isEmpty(),
  check("lastName", "lastName is required").not().isEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check("password", "Please enter a password").isLength({ min: 8 }),
  check("childId", "Please enter a childId").isLength({ min: 6 }),
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ msg: errors.array() });
    }
    
  const { firstName, lastName, email, password, childId, role } = req.body;

  try {
    let user = await User.findOne({ email }).exec();

    // Check if user exists

    if (user) {
      return res
        .send({ msg:"User alredy exists" });
    }
    // Instance User

    user = new User({
      firstName,
      lastName,
      email,
      password,
      childId,
      role,
    });

    // Encrypt password
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);
    // JWT Token generation
    var created = await user.save();
    // const payload = {
    //   user: {
    //     id: user.id,
    //   },
    // };
    res.send(created)
    // jwt.sign(
    //   payload,
    //   config.get("jwtSecret"),
    //   { expiresIn: 360000 },
    //   (err, token) => {
    //     if (err) throw err;
    //     res.json({ token });
    //   }
    // );
  } catch (err) {
    res.send({msg:"Server error"});
  }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        await services.userServices.deleteUser({ _id: req.params.id })
        res.send({status:true})
    } catch (err) {
        res.send({err,status:false})
    }
})

router.post('/update', async (req, res) => {
    try {
        var newUser = await services.userServices.updateUser(req.body)
        res.send({newUser,status:true})
    } catch (err) {
        res.send({err,status:false})
    }
})

  

module.exports = router;
