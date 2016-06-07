// Nodeschool.io tutorial - learn you Nodeschool - exercise 6

var fs = require('fs');
var path = require('path');

function filterFiles(dirPath, ext, callback) {
  fs.readdir(dirPath, function(err,data){
    if(err) {
      return callback(err);
    }else {
      var filteredData = data.filter(function(e){
        return path.extname(e) === ('.' + ext);
      });
      callback(null, filteredData);
    }
  });
}

module.exports = filterFiles;
