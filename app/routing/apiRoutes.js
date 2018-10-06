const express = require('express');
const apiRoutes = express.Router();
const bodyParser = require("body-parser");
const friends = require('../data/friends');

apiRoutes.use(bodyParser.urlencoded({ extended: true }));
apiRoutes.use(bodyParser.json());

apiRoutes.get("/api/friends", function(req, res){

    return res.json(friends);
});

apiRoutes.post("/api/friends", function(req, res){
    
    const newFriend = req.body;
    friends.push(newFriend);
    res.json(newFriend)
})

module.exports = apiRoutes;