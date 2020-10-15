const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {Router} =require("express");

const port = process.env.PORT || 8000;
app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//  print hello World
app.get('/',(req, res) =>{
    
    return res.json({message: "Hello world!"});
})

// addition
app.post('/add', (req, res) =>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(typeof num1 === "string" || typeof num2 === "string") {
        return res.status(200).json({message: "Invalid data types"});
    }
    let sum = num1 + num2;

    if(num1 >= 1000000 || num2 >= 1000000 || sum >= 1000000){
        return res.status(200).json({message:"Should be less than 1000000"})
    }
    res.status(200).json({ message: "the sum of given two number's ", sum: sum })
})

// route for substraction

app.post('/sub', (req, res) =>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(typeof num1 === "string" || typeof num2 === "string") {
        return res.status(200).json({message: "Invalid data types"});
    }
    let sub = num1 - num2;

    if(num1 <= -1000000 || num2 <= -1000000 ){
        return res.status(200).json({message:"Should be greater than 1000000"})
    }
    res.status(200).json({ message: "the substraction of given two number's ", sub: sub })
})

// route for multiplication

app.post('/mul', (req, res) =>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(typeof num1 === "string" || typeof num2 === "string") {
        return res.status(200).json({message: "Invalid data types"});
    }
    let mul = num1 * num2;

    if(num1 >= 1000000 || num2 >= 1000000 || mul > 1000000){
        return res.status(200).json({message:"Should be less than 1000000"})
    }
    res.status(200).json({ message: "the multiplication of given two number's ", mul: mul })
})

// route for divide
app.post('/div', (req, res) =>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(typeof num1 === "string" || typeof num2 === "string") {
        return res.status(200).json({message:"Invalid DataTypes"});
    }
    if (num2 === 0 ) {
        return res.status(200).json({message: "Can not divide by zero"});
    }
    let div = num1 / num2;
    
    res.status(200).json({message: "The division of given number's", div})
})



app.listen(port,() => console.log(`Server running at ${port}`));
module.exports = app;