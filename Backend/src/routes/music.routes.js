const express=require('express');
const musoicController=require('../controllers/music.controller');
const router=express.Router();
const multer=require('multer');
const authMiddleware=require('../middleware/auth.middleware');
const upload=multer({
    storage:multer.memoryStorage(),
});
 
router.post("/upload",upload.single('music'),authMiddleware.authArtist,musoicController.createMusic);

router.post("/createAlbum",authMiddleware.authArtist,musoicController.createAlbum);






module.exports=router;