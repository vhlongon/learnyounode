// Nodeschool.io tutorial - learn you Nodeschool - exercise 8
// collecting data from get request using bl package

var http = require('http');
var url = process.argv[2];
var bl = require('bl');

http.get(url, function(response){
  response.pipe(bl(function(err,data) {
    if(err) {
      return console.error(err);
    }
    var str = data.toString();
    console.log(str.length);
    console.log(str);
  }));
});
