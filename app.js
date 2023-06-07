/* importing express.js */
const express = require('express');
const app = express();
/* importing express.js */



const path = require('path');

const adminRouter = require('./routes/admin');

/* middlewares for routing */
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views','index.html'))
});
app.use('/admin',adminRouter)



app.use((req,res)=>{
    res.status(404);
    res.send('<h1>404 sayfası</h1>');
});



app.listen(3000, () =>{
    console.log('Port 3000 dinleniyor...')
});