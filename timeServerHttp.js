// Nodeschool.io tutorial - learn you Nodeschool - exercise 11
// HTTP file server

var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function (request, response) {
  //request fetch properties, like header and query-string
  //response sends data to the client, both reader and body

  // send a 200 response indicating that the file has been succefully served back
  response.writeHead(200, {'content-type': 'text/plain'});
  //this returns a stream that you can pipe and send the file back as a response
  fs.createReadStream(file).pipe(response);
});



server.listen(port);
