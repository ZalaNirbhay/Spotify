const express=require('express');
const musoicController=require('../controllers/music.controller');
const router=express.Router();
const multer=require('multer');
const upload=multer({
    storage:multer.memoryStorage(),
});
 
router.post("/upload",upload.single('music'),musoicController.createMusic);








module.exports=router;