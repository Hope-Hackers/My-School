const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtDecode = require("jwt-decode");
const User = require("../../models/User");

const { check, validationResult } = require("express-validator");

router.get("/", async (req, res) => {
  try {
    var Users = await User.find({});
    res.send(Users);
  } catch (error) {
    res.send(error);
  }
});

router.post(
  "/createUser",
  [
    check("firstName", "firstName is required")
      .not()
      .isEmpty(),
    check("lastName", "lastName is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a password").isLength({ min: 8 }),
    check("childId", "Please enter a childId").isLength({ min: 1 }),
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
        return res.send({ msg: "User alredy exists" });
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
      res.send(created);
    } catch (err) {
      res.send({ msg: "Server error" });
    }
  }
);

router.delete("/delete/:id", async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.send({ status: true });
  } catch (err) {
    res.send({ err, status: false });
  }
});

router.post("/update", async (req, res) => {
  try {
    var newUser = await User.findOneAndUpdate({ _id: req.body._id }, req.body, {
      useFindAndModify: false,
    });
    res.send({ newUser, status: true });
  } catch (err) {
    res.send({ err, status: false });
  }
});

router.post("/filterByToken", async (req, res) => {
  try {
    var userId = jwtDecode(req.body.token).user.id;
    var user = await User.findOne({ _id: userId }).select("-password");
    console.log(user);
    res.send(user);
  } catch (err) {
    res.send({ err, status: false });
  }
});

module.exports = router;
