const express = require('express')();
const app = express;
const bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
    res.send('hello world');  
  });
app.post('/login',function(req,res){
    let user_name = req.body.name;
    let password = req.body.password;
    res.send(JSON.parse("ESTEESMITOKEN"));
  });

app.listen(3000,function(){
    console.log('Example app');
  });
