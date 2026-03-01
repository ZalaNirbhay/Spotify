const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

    app.use(express.json());
    app.use(cookieParser());
    app.use(cors());
        
app.use((req, res, nxt) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  nxt();
});


    




module.exports = app;