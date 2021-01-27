const express = require("express");
const router = express.Router();
const app = express();
const send = require("../../server.js");
app.use(express.json());
const Messages = require("../../models/messages");

router.post("/postMessage", async (req, res) => {
  senderId = req.body.uuid;
  receiverId = req.body.receiverId;
  message = req.body.text;
  date = Date.now();

  message = new Messages({
    senderId,
    receiverId,
    message,
    date,
  });
  await message.save();
  send.send("newmsg", message);
  res.send(message);
});
router.get("/getMessages", async (req, res) => {
  console.log(req.query);
  let mess = await Messages.find({
    senderId: req.query.id1,
    receiverId: req.query.id2,
  })
    .sort({ date: -1 })
    .exec();
  let messe = await Messages.find({
    receiverId: req.query.id1,
    senderId: req.query.id2,
  })
    .sort({ date: -1 })
    .exec();
  messe.forEach((elem) => {
    mess.push(elem);
  });
  mess.sort((a, b) => {
    if (a.date <= b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  res.send(mess);
});
module.exports = router;
