var express = require('express');
var app = express();

var fs=require("fs");

app.get('/', function (req, res) {
  res.send('Hello World!1111');
});

app.use(express.static("./"));


app.get("/xxx", function(request, response) {
    // fs.readFile("./"+request.path.substr(1),function(err,data){
    fs.readFile("./test111.html",function(err,data){
         // body
         if(err){
             console.log(err);
             //404：NOT FOUND
             response.writeHead(404,{"Content-Type":"text/html"});
         }
         else{
             //200：OK
             response.writeHead(200,{"Content-Type":"text/html"});
             response.write(data.toString());
         }
         response.end();
     });
 });

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});