var http = require('http');
var express = require('express');
const sendMail =  require('./mail');
const path = require('path');
var app = express();


app.use(express.static(path.join(__dirname, 'style.css')));

app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());

app.get('/', (req,res) => {
      res.sendFile(path.join(__dirname,'index.html'))
});

app.use(express.static('public'));

app.post('/registration', (req,res) => {
    console.log('Data',req.body);
    sendMail();
    res.json({message: 'Message received'});
});

app.listen(8080, ()=>{
    console.log('server is listening')
})