// Nodeschool.io tutorial - learn you Nodeschool - exercise 3

var fs = require ('fs');

function readFile(argv) {
  var buffer = fs.readFileSync(argv[2]);
  var str = buffer.toString();

  var arr = str.split('\n');
  return (
    arr.length - 1
  );
}

console.log( readFile(process.argv) );
