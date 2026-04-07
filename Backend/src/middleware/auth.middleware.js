const jwt = require("jsonwebtoken");
require("dotenv").config();

async function authArtist(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      if (decoded.role !== "artist") {
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      req.artist = decoded;
      next();           
}
    catch (err) {       
        console.log(err);
        return res.status(401).json({ message: "Invalid token" });
    }
}

module.exports = {
    authArtist,
    }