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
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, email, password, childId } = req.body;

  try {
    let user = await User.findOne({ email }).exec();

    // Check if user exists

    if (user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "User alredy exists" }] });
    }
    // Instance User

    user = new User({
      firstName,
      lastName,
      email,
      password,
      childId,
    });

    // Encrypt password
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    // JWT Token generation
    await user.save();
    const payload = {
      user: {
        id: user.id,
      },
    };
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
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
