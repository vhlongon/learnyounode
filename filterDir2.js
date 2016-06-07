// Nodeschool.io tutorial - learn you Nodeschool - exercise 6

var filterDir = require('./filterModule');

var dirPath = process.argv[2];
var ext = process.argv[3];


filterDir(dirPath, ext, function(err,data){
  if(err) {
    console.log('an error has ocurred: ' + err);
  }else {
    data.forEach(function(file) {
      console.log(file);
    });
  }
});
