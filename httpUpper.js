// Nodeschool.io tutorial - learn you Nodeschool - exercise 12
// HTTP file server - transform request text to upper case and add it
// back to the response

var http = require('http');
var fs = require('fs');
var map = require('through2-map')

var port = process.argv[2];

var server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    // fs.createReadStream(file).pipe(response);
    request.pipe(
      map( chunk => chunk.toString().toUpperCase() )
    )
    .pipe(response);
  }else {
    return response.end('Send me a post request');
  }
});


server.listen(port);
