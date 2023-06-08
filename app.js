/* importing express.js */
const express = require('express');
const app = express();
/* importing express.js */

app.set('view engine', 'ejs');

const path = require('path');

const adminRouter = require('./routes/admin');

/* static files */
app.use(express.static(path.join(__dirname,'/assets')))
/* middlewares for routing */
app.get('/',(req,res)=>{
    res.render('index',{title: 'Homepage'})
});
app.use('/admin',adminRouter)



app.use((req,res)=>{
    res.status(404);
    res.send('<h1>404 sayfası</h1>',{title: 'Page not found'});
});



app.listen(3000, () =>{
    console.log('Port 3000 dinleniyor...')
});