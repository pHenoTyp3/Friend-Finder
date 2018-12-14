const path = require("path");
console.log(__dirname)


module.exports = function(app){
  app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/../public/home.html"))
});
app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname, "/../public/survey.html"))
});

app.get("/data/friends", function(req, res){
    res.sendFile(path.join(__dirname, "../data/friends.js"));
   });

};



