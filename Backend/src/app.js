const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userModel = require("./models/user.model");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use((req, res, nxt) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  nxt();
});

app.post("/registerUser", (req, res) => {
  const { username, email, password, role } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newUser = new userModel({
    username,
    email,
    password,
    role,
  });
  newUser
    .save()
    .then((user) => {
      res.status(201).json({ message: "User registered successfully", user });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error registering user", error: err.message });
    });
});


app.get('/', (req, res) => {
  res.send('Welcome to the User Management API');
});

module.exports = app;
