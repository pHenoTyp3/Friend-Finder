const log = console.log
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//data
// var person1 = {
//     route: "people1",
//     name: "person1",
//     job: "random title1",
//     age: 27,
//   };
  
//   var person2 = {
//     route: "people2",
//     name: "person2",
//     job: "random title2",
//     age: 22,
//   };



// //routes
// app.get("/", function(req,res){
//     res.sendFile(path.join(__dirname, "/app/public/home.html"))
// });
// app.get("/survey", function(req,res){
//     res.sendFile(path.join(__dirname, "app/public/survey.html"))
// });





require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);






//listening
app.listen(PORT,function(){
    console.log(`listening on port ${PORT}`)
})