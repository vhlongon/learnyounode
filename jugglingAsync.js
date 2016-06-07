// Nodeschool.io tutorial - learn you Nodeschool - exercise 9
// priting data from 3 different sources couting callback to get on the
// right order

var http = require('http');
var urls = process.argv.slice(2);
var bl = require('bl');

function countingCallbacks(urls, callback) {
  var strs = [];
  var count = 0;
  urls.forEach(function(url,index) {
    http.get(url, function(response){
      response.pipe(bl(function(err,data) {
        if(err) {
          return console.error(err);
        }
        strs.push(data.toString());
        count++;
        if(count === urls.length ) {
          callback(strs);
        }
      }));

    });

  });
}

countingCallbacks(urls,function(response){
  response.forEach((string) => {
    console.log(string);
  })
});

// official answer:

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }
//
// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)
//
//       results[index] = data.toString()
//       count++
//
//       if (count == 3)
//         printResults()
//     }))
//   })
// }
//
// for (var i = 0; i < 3; i++)
//   httpGet(i)
