const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");

// @route   POST api/register
// @desc    Register user
// @access  Public
router.post(
  "/",
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
      return res.send({ errors: errors.array() });
    }

    const { firstName, lastName, email, password, childId } = req.body;

    try {
      let user = await User.findOne({ email }).exec();

      // Check if user exists

      if (user) {
        return res.send({ errors: [{ msg: "User alredy exists" }] });
      }
      // Instance User
      messangerId = fourCharID();
      user = new User({
        firstName,
        lastName,
        email,
        childId,
        password,
        messangerId,
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
      console.log(user);
      // JWT Token generation
      await user.save();
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.send({
            token: token,
            messangerId: user.messangerId,
            username: user.firstName + " " + user.lastName,
          });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);
function fourCharID() {
  const maxLength = 4;
  const possible = "abcdef0123456789";
  let text = "";

  for (let i = 0; i < maxLength; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

module.exports = router;
