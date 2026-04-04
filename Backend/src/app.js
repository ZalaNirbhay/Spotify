const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const musicRoutes = require("./routes/music.routes");
const app = express();
const multer = require("multer");
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

app.use("/api/auth", authRoutes);
app.use("/api/music", musicRoutes);



module.exports = app;
