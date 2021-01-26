const express = require("express");
const connectDB = require("./config/db");
const teacher = require("./models/teacher");
const admin = require("./models/admin");
const event = require("./models/event");
const service = require("./models/service");
const app = express();
const cors = require("cors");
// DB Connection
connectDB();
app.use(cors());
app.use(express.json());

// Init Middleware
app.use(express.json({ extended: true }));

app.get("/", (req, res) => res.send("API Running"));

// Define routes
app.use("/api/event", require("./routes/api/event"));
app.use("/api/service", require("./routes/api/service"));
app.use("/api/register", require("./routes/api/register"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/contact", require("./routes/api/contact"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
