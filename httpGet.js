// Nodeschool.io tutorial - learn you Nodeschool - exercise 13

// Write an HTTP server that serves JSON data when it receives a GET request
//  to the path '/api/parsetime'. Expect the request to contain a query string
//  with a key 'iso' and an ISO-format time as the value.
//
//  For example:
//
//  /api/parsetime?iso=2013-08-10T12:10:15.474Z
//
//  The JSON response should contain only 'hour', 'minute' and 'second'
//  properties. For example:
//
//     {
//       "hour": 14,
//       "minute": 23,
//       "second": 15
//     }
//
//  Add second endpoint for the path '/api/unixtime' which accepts the same
//  query string but returns UNIX epoch time in milliseconds (the number of
//  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
//  For example:
//
//     { "unixtime": 1376136615474 }


var http = require('http');
var url = require('url');
var port = process.argv[2];

var routes = {
  '/api/parsetime': (parsedUrl) => {
    var d = new Date(parsedUrl.query.iso);
    return {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    };
  },
  '/api/unixtime': (parsedUrl) => {
    return {unixtime: (new Date(parsedUrl.query.iso)).getTime()};
  }
}
var server = http.createServer((request, response) => {

  // parse the request url into an object with several useful properties
  var parsedUrl = url.parse(request.url, true);
  // try to match the url pathname with one of our routes
  var resource = routes[parsedUrl.pathname];

  //if it is a GET request and the path matchs one of our routes
  //we write a 200 back and send the data back as json
  if(request.method === 'GET' && resource) {
    response.writeHead(200, {'Content-Type': 'application-json'});
    response.end(JSON.stringify(resource(parsedUrl)));
  //otherwise we send a 404 response instead
  }else {
    response.writeHead(404);
    response.end();
  }
});


server.listen(port);
