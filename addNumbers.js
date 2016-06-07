// Nodeschool.io tutorial - learn you Nodeschool - exercise 2


function addNumbers(argv) {
  return (
    argv.reduce(function(previousValue, currentValue, currentIndex, array) {
      //adding values from index 2 and on

        if(currentIndex > 1) {
          return Number(previousValue) + Number(currentValue);

        } else {
          return 0;
        }
    }, 0)
  )
}

console.log( addNumbers(process.argv) );
