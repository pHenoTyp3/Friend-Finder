

const path = require("path")
const characters = require("../data/friends.js")



module.exports = function (app) {
    app.get("/friends", function (req, res) {
        res.json(data);
    });

    app.post("/userdata", function (req, res) {
        console.log(req.body);
        var newFriend = req.body;
        characters.push(newFriend);
        res.json(characters);
    });


    
};

