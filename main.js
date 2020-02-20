const express = require('express')();
const app = express;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    return next();
});


app.get('/',function(req,res){
    res.send('hello world');  
  });
app.post('/login',function(req,res){
    let user_name = req.body.name;
    let password = req.body.password;
    res.send("ESTEESMITOKEN");
  });

app.listen(3000,function(){
    console.log('Example app');
  });
