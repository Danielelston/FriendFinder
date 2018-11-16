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
    
   
    const newFriend = req.body;
    friendsArray.push(newFriend);
    res.json(newFriend);

    console.log(newFriend);

});

module.exports = apiRoutes;