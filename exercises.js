const fs = require('fs');
const marked = require('marked');
const _ = require('lodash');


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

// fs.readFile(process.argv[2], function(err, buffer) {
//   if (err) {
//     console.log('Error: ', err.message);
//     return;
//   }
//   console.log('Got binary data: ', buffer.toString());
// })


// Ex-5

// var buffer = fs.readFileSync(process.argv[2]);
// fs.writeFileSync(process.argv[3], buffer.toString().toUpperCase())


// Ex-6

// fs.readFile(process.argv[2], function(err, buffer) {
//   if (err) {
//     console.log('1:', err.message);
//     return;
//   } else {
//     fs.writeFile(process.argv[3], buffer.toString().toUpperCase(), function(err) {
//       if (err) {
//         console.log('2:', err.message)
//       } else {
//         console.log('Success')
//       }
//     });
//   };
// });


// Ex-7

            // 2-in-1
            //
            // Write a program to take two input file names and one output file name. The program will read in the two input files, break the text of each file into arrays of lines, an intersperse them, then write the results to the output file. Example:
            //
            // haiku1.txt has the content:
            //
            // old pond
            // a frog leaps in
            // water's sound
            // haiku2.txt has the content:
            //
            // the first cold shower
            // even the monkey seems to want
            // a little coat of straw
            // If you run the program:
            //
            // $ node intersperse.js haiku1.txt haiku2.txt output.txt
            // output.txt will contain:
            //
            // old pond
            // the first cold shower
            // a frog leaps in
            // even the monkey seems to want
            // water's sound
            // a little coat of straw

// var haiku1 = fs.readFileSync(process.argv[2]);
// var haiku2 = fs.readFileSync(process.argv[3]);
// var haiku1 = haiku1.toString().split("\n").splice(0, 3);
// var haiku2 = haiku2.toString().split("\n").splice(0, 3);
// var output = [];
// for (var i = 0; i < haiku1.length; i++) {
//   output.push(haiku1[i]);
//   output.push(haiku2[i]);
// }
// fs.writeFileSync(process.argv[4], output.join('\n'));


// Ex-8

// fs.readFile(process.argv[2], function(err, buffer) {
//   var output = [];
//   if (err) {
//     throw new Error('Whatever you wanted did not happen...');
//   }
//   buffer = buffer.toString().split("\n").splice(0, 3);
//   fs.readFile(process.argv[3], function(err, buffer2) {
//     if (err) {
//       throw new Error('You got this far, but still no dice...');
//     }
//     buffer2 = buffer2.toString().split("\n").splice(0, 3);
//     // That lodash and flatten thing Toby taught me about (the underscore):
//     var output = _.flatten(_.zip(buffer, buffer2));
//     fs.writeFile(process.argv[4], output.join('\n'), function(err) {
//       if (err) {
//         console.log(err.message);
//       }
//     });
//   });
// });


// Ex-9

// fs.readFile(process.argv[2], function(err, readme) {
//   if (err) {
//     throw new Error('HAHAHAHA!');
//     return;
//   }
//   // console.log(marked(readme.toString()));
//   fs.writeFile(process.argv[3], marked(readme.toString()), function(err) {
//     if (err) {
//       console.log(err.message);
//     }
//   });
// });
