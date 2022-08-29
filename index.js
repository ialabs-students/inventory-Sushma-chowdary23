const express = require("express");

console.log("hello , i'm  Sushma");

const server = express();  // convert body to json(express.json) and keep it in a  body key in request  

server.use(express.json())    // midllevar method

var users = [];

var emailValidator = (req, res, next) =>  {
     var userdata = req.body;
     if(userdata.email == undefined){
        res.status(400);
        res.send("Invalid request body , Email is mandatory");
     }
     next();
};

server.get("/hello",(req,res)=> {
    res.send("Hello welcomee!!");
});

//PATH PARAM 
server.get("/hello/:name", (req, res) => {
    res.send("Hi there, glad to meet you " + req.params.name);
});

//QUERY PARAM
server.get("/hi", (req, res) => {
    res.send("Hello there, glad to meet you " + req.query.name);
});
server.post("/register/users", (req, res) => {
    // console.log(req.body);
    users.push(req.body);
    res.send("user register succesfully")
});
server.put("/update/user", (req, res) => {
    // console.log(req.body);
    users.push(req.body);
    res.send("user register succesfully")
});

server.get("/fetch/user", (req, res) => {

    res.send(users)
});

server.delete("/delete/user",(req,res) => {
    users.pop(req.body);
    res.send(users);
})
server.get("/fetch/user/:id", (req, res) => {
    var id = req.params.id;
    users.forEach(u => {
        if (u.id == id) {
            res.send(u);
        }
})
res.send({});
});

server.listen(4000, () => {
    console.log("server running on port :4000");
});
