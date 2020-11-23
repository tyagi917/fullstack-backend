const express=require('express');
const router=express.Router();
const {Post}=require('../controller/postcontroller.js');
router.post('/firstapi',Post);
//router.get('/secondapi',restult1);
module.exports=router;