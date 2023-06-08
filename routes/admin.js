const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/index',(req,res)=>{
    res.render('admin')
});


module.exports = router;