const express = require('express');
const apiRoutes = express.Router();
const bodyParser = require("body-parser");
const friendsArray = require('../data/friends');

apiRoutes.use(bodyParser.urlencoded({ extended: true }));
apiRoutes.use(bodyParser.json());

apiRoutes.get("/api/friends", function(req, res){

    return res.json(friendsArray);

});

apiRoutes.post("/api/friends", function(req, res){
    
    console.log("got to post");
    const newFriend = req.body;
    friendsArray.push(newFriend);
    res.json(newFriend);

});

module.exports = apiRoutes;