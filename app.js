var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port=3030;
var request = require('request');
app.use(express.static(path.join(__dirname,'/client/dist/my-app/')));

const api= require('./routes/serverapi.js')
app.use('/api',api);

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'./client/dist/my-app/index.html'));
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(port,function(){
console.log(`Portal running on ${port}!`);
});
 
 
