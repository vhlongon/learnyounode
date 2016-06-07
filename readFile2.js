// Nodeschool.io tutorial - learn you Nodeschool - exercise 4 (async)

var fs = require ('fs');
var myNumber = undefined;

function readFile2(callback) {
  // async method
  fs.readFile(process.argv[2], function doneReading(err,buffer) {
    if(!err) {
      var arr = buffer.toString().split('\n');
      myNumber =  arr.length -1;
      callback();
    }else {
      myNumber = 'an error has ocurred';
    }
  })
}

function logNumber() {
  console.log(myNumber)
}

readFile2(logNumber);

// Theirs solution:

// var fs = require('fs')
// var file = process.argv[2] ;
// fs.readFile(file, function (err, contents) {
//   // fs.readFile(file, 'utf8', callback) can also be used
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// });                                                          
