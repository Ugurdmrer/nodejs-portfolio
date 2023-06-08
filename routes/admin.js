const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/index',(req,res)=>{
    
    res.render('admin',{title: 'Admin page'})
});


module.exports = router;