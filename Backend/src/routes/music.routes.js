const express=require('express');
const musicController=require('../controllers/music.controller');
const router=express.Router();
const multer=require('multer');
const authMiddleware=require('../middleware/auth.middleware');
const upload=multer({
    storage:multer.memoryStorage(),
});
 
router.post("/upload",upload.single('music'),authMiddleware.authArtist,musicController.createMusic);

router.post("/createAlbum",authMiddleware.authArtist,musicController.createAlbum);

router.get("/getAllMusics",musicController.getAllMusics);




module.exports=router;