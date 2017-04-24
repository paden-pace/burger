var burgerJS = require("./../models/burger.js");
var express = require("express");

var router = function(app){
    app.get("/api/friends", function(req, res) {
    //     return res.json(members);
    });

    // Create New Member - takes in JSON input
    app.post("/api/new", function(req, res) {
        // var newMember = req.body;
        // members.push(newMember);
        // res.json(newMember);
    });
};


module.exports = router;



// var htmlRoutes = function (app) {
//     app.get("/survey", function(req, res) {
//         res.sendFile(path.join(__dirname, "./../public/survey.html"));
//     });
//     app.get("/", function(req, res){
//         res.sendFile(path.join(__dirname, "./../public/home.html"));
//     });
// };


// module.exports = htmlRoutes;