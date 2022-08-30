var express = require("express");
console.log("hello , i'm  sushma");
var server = express();
server.use(express.json());
var users = [];
var user1 = [
    { id: 1, name: 'Sushma', orderdetails: 'burgger', order: 1, deliverd: true },
    { id: 2, name: 'Vijayalak', orderdetails: 'fish fry', order: 2, deliverd: true },
    { id: 3, name: 'Suriya', orderdetails: 'Biriyani', order: 3, deliverd: true },
    { id: 4, name: 'Mani', orderdetails: 'Momos', order: 4, deliverd: false },
    { id: 5, name: 'chitti', orderdetails: 'sambar rice', order: 5, deliverd: true },
];
var data = [];
var emailValidator = function (req, res, next) {
    var userdata = req.body;
    if (userdata.email == undefined) {
        res.status(400);
        res.send("Invalid request body , Email is mandatory");
    }
    next();
};
server.get("/hello", function (req, res) {
    res.send("Hello welcomee!!");
});
server.get("/hello/:name", function (req, res) {
    res.send("Hi there, glad to meet you " + req.params.name);
});
server.get("/hi", function (req, res) {
    res.send("Hello there, glad to meet you " + req.query.name);
});
server.post("/register/users", function (req, res) {
    users.push(req.body);
    res.send("user register succesfully");
});
server.post("/register/data", function (req, res) {
    data.push(req.body);
    res.send("user register succesfully");
});
server.put("/update/user", function (req, res) {
    users.push(req.body);
    res.send("user register succesfully");
});
server.get("/fetch/user", emailValidator, function (req, res) {
    res.send(users);
});
server.get("/fetch/user1", function (req, res) {
    res.send(user1);
});
server.get("/fetch/user2", function (req, res) {
    res.send(data);
});
//delete method
server["delete"]('/:id', function (req, res) {
    var found = user1.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        var targetIndex = user1.indexOf(found);
        user1.splice(targetIndex, 1);
    }
    res.sendStatus(204);
});
server.get("/fetch/user/:id", function (req, res) {
    var id = req.params.id;
    users.forEach(function (u) {
        if (u.id == id) {
            res.send(u);
        }
    });
    res.send({});
});
server.use('/', function (req, res, next) {
    var filters = req.query;
    var filteredUsers = user1.filter(function (user) {
        var isValid = true;
        for (key in filters) {
            console.log(key, user[key], filters[key]);
            isValid = isValid && user[key] == filters[key];
        }
        return isValid;
    });
    res.send(filteredUsers);
});
