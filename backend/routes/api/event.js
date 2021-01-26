const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());
const Event = require("../../models/event");

router.post("/", async (req, res) => {
  console.log("post event herre");
  await Event.create(
    {
      title: req.body.title,
      author: req.body.author,
      body: req.body.body,
      img: req.body.img,
    },
    (err, doc) => {
      if (!err) {
        res.send("success");
      }
    }
  );
});

router.get("/", async (req, res) => {
  console.log("get all events here");

  await Event.find({}, function (err, events) {
    res.send(events);
  });
});

module.exports = router;
