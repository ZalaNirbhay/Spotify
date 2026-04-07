const musicModel = require("../models/music.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const { uploadFile } = require("../services/storage.service");
const albumModel = require("../models/album.model");

async function createMusic(req, res) {
  try {
    const { title } = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString("base64"));

    const music = new musicModel({
      uri: result.url,
      title,
      artist: req.artist.id,
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
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function createAlbum(req, res) {
  try {
    const { title, musics } = req.body;

    const album = await albumModel.create({
      title,
      musics: musics,
      artist: req.artist.id,
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
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function getAllMusics(req, res) {
  try {
    const musics = await musicModel.find()
    res.status(200).json({ musics });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  createMusic,
  createAlbum,
  getAllMusics,
};
