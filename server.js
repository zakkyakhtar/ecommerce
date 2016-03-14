var express = require("express");

var app = express();

app.listen(3000, function(err){
    if(err) throw err;
    console.log("Server is running on port 3000");
});

app.get("/getMeSomething",function(request, response){
    response.json("{name : Zakky}");
});