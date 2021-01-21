const express = require("express");
const connectDB = require("./config/db");
const teacher = require("./models/teacher");
const admin = require("./models/admin");
const app = express();
const cors = require("cors");
const http = require("http");
const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
io.on("connect", (socket) => {
  io.on("hey", () => {
    console.log("test");
  });
});
io.on("hey", (data) => {
  console.log("data");
});
// DB Connection
connectDB();
app.use(cors());

app.use(express.json());

// Init Middleware
app.use(express.json({ extended: true }));

app.get("/", (req, res) => res.send("API Running"));

// Define routes
app.use("/api/register", require("./routes/api/register"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/contact", require("./routes/api/contact"));
app.use("/api/messages", require("./routes/api/messages"));
app.use("/api/schedule", require("./routes/api/schedule"));
app.use("/api/grades", require("./routes/api/grades"));
app.use("/api/classSchedule", require("./routes/api/classSchedule"));
const PORT = process.env.PORT || 7000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
const send = (event, msg) => {
  io.emit(event, msg);
};
exports.send = send;
