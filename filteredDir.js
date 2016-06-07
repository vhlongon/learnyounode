// Nodeschool.io tutorial - learn you Nodeschool - exercise 5

var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var ext = process.argv[3];

fs.readdir(dirPath, function(err,list){
  if(!err) {
    list.forEach(function(e){
      if(path.extname(e) === ('.' + ext)) {
        console.log(e);
      }
    });
  }else {
    console.error('An error as ocurred: ' + err);
  }
});
