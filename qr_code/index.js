const express = require('express');
const ejs = require('ejs');
const path = require('path');
const qrcode = require('qrcode');

const app = express();
const port = process.env.port || 3521;

app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'))

app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.render("index")
});

app.post('/scan',(req,res)=>{
    const text = req.body.text;
    console.log(text);
    qrcode.toDataURL(text,(err,src)=>{
        res.render('scan',{
            qr_code : src,
        });
    })
});
app.listen(port,console.log('listening'));
