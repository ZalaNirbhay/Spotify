const nusicModel = require("../models/music.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const { uploadFile } = require("../services/storage.service");
const albumModel = require("../models/album.model");

async function createMusic(req, res) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "artist") {
      return res
        .status(403)
        .json({ message: "you dont have permission to create music" });
    }

    const { title } = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString("base64"));

    const music = new nusicModel({
      uri: result.url,
      title,
      artist: decoded.id,
    });

    await music.save();


    res.status(201).json({
      message: "Music created successfully",
      music: {
        id: music._id,
        uri: music.uri,
        title: music.title,
        artist: music.artist,
      },
    });
  } catch (err) {
    console.log(err);

    return res.status(401).json({ message: "Invalid token" });
  }
}

async function createAlbum(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message:
        "Unauthorized , please login you dont have permission to create album",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "artist") {
      return res.status(401).json({
        message: "Unauthorized , you dont have access to create album ",
      });
    }
    
    const { title, musics } = req.body;

    const album = await albumModel.create({
      title,
      musics: musics,
      artist: decoded.id,
    });

    res.status(201).json({
      message: "Album created successfully",
      album:{
        id: album._id,
        title: album.title,
        musics: album.musics,
        artist: album.artist,
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "unauthorized",
    });
  }
}

module.exports = {
  createMusic,
  createAlbum,
};
