var fs = require('fs');


// Ex-1

//
// var buffer = fs.readFileSync(process.argv[2]);
// console.log(buffer.toString().toUpperCase());


// Ex-2

// var fs = require('fs');
//
// var buffer = fs.readFileSync(process.argv[2]);
//
// console.log(buffer.toString().toUpperCase());


// Ex-3

// try {
//   var buffer = fs.readFileSync(process.argv[2]);
//   console.log(buffer.toString().toUpperCase());
// } catch (error) {
//   console.log(error.message);
// }


// Ex-4

fs.readFile(process.argv[2], function(err, buffer) {
  if (err) {
    console.log('Error: ', err.message);
    return;
  }
  console.log('Got binary data: ', buffer.toString());
})
