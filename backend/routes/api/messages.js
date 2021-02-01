const express = require("express");
const router = express.Router();
const app = express();
const send = require("../../server.js");
app.use(express.json());
const Messages = require("../../models/messages");
<<<<<<< HEAD
const User = require("../../models/User");

=======
>>>>>>> main
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
<<<<<<< HEAD
=======
  console.log(req.query);
>>>>>>> main
  let mess = await Messages.find({
    senderId: req.query.id1,
    receiverId: req.query.id2,
  })
    .sort({ date: -1 })
<<<<<<< HEAD
=======
    .limit(4)
>>>>>>> main
    .exec();
  let messe = await Messages.find({
    receiverId: req.query.id1,
    senderId: req.query.id2,
  })
    .sort({ date: -1 })
<<<<<<< HEAD
=======
    .limit(4)
>>>>>>> main
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
<<<<<<< HEAD

router.get("/users", async (req, res) => {
  let myId = req.query.id;
  let users = [];
  let allMessages = await Messages.find(
    {
      $or: [{ senderId: myId }, { receiverId: myId }],
    },
    { senderId: 1, receiverId: 1, _id: 0 }
  )
    .sort({ date: -1 })
    .exec();
  for (let msg of allMessages) {
    if (msg.senderId == myId && !users.includes(msg.receiverId)) {
      users.push(msg.receiverId);
    } else if (msg.receiverId == myId && !users.includes(msg.senderId)) {
      users.push(msg.senderId);
    }
  }
  let usersData = await User.find(
    {
      messangerId: { $in: users }, //return if messangerId inside list of users
    },
    { firstName: 1, lastName: 1, messangerId: 1, _id: 0 }
  ).exec();
  res.json(
    usersData.map((item) => {
      return {
        name: item.firstName + " " + item.lastName,
        id: item.messangerId,
      };
    })
  );
});

module.exports = router;
=======
module.exports = router;
>>>>>>> main
