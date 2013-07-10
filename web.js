var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  response.send(buf.toString("utf-8",0,buf.length));
});
    var buf = new Buffer(30);
buf = fs.readFile('index.html',function (err,data){
  if(err) throw err;
   console.log(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
