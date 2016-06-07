// Nodeschool.io tutorial - learn you Nodeschool - exercise 10
// TCP time server

var net = require('net');
var port = process.argv[2];

var server = net.createServer(function (socket) {
  var date = generateDate(new Date());

  socket.end(date + '\n');
});


function pad(n) { return n < 10 ? '0' + n : n }

// Format data to "YYYY-MM-DD hh:mm"
function generateDate(date) {
  var year = date.getFullYear(),
      month = (date.getMonth() + 1),
      formatedMonth = (month.toString().length < 2) ? '0' + month : month,
      day = (date.getDate().toString().length < 2) ? '0' + date.getDate() : date.getDate(),
      hour = (date.getHours().toString().length < 2) ? '0' + date.getHours() : date.getHours(),
      min = (date.getMinutes().toString().length < 2) ? '0' + date.getMinutes() : date.getMinutes();

  return year + '-' + formatedMonth + '-' + day + ' ' + hour + ':' + min;
}


server.listen(port);
