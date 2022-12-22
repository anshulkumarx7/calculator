const express = require("express");
const bodyParser = require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
    // console.log(__dirname);
})
app.get('/bmicalculator',function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
    // console.log(__dirname);
})
app.post('/',function(req,res){
    // console.log(req.body);  
    // console.log(req.body.num1);
    var num1=Number(req.body.num1);  
    var num2=Number(req.body.num2); 
    var result =num1+num2; 
    res.send("The result is: "+result);
})

app.post('/bmicalculator',function(req,res){
    var w=parseFloat(req.body.weight);  
    var h=parseFloat(req.body.height); 
    var r =w/(h*h); 
    res.send("Your BMI is: "+r); 
})

app.listen(3000,function(){
    console.log("Server running at port 3000");
})