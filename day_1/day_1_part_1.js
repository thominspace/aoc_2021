#!javascript
// Load the fs (filesystem) module.
var fs = require('fs');
// input_file = 'test_input.txt'
input_file = 'input.txt'
// Read the contents of the file into memory.
fs.readFile(input_file, function (err, logData) {
// If an error occurred, throwing it will
  // display the exception and kill our app.
  if (err) throw err;
// logData is a Buffer, convert to string.
  var text = logData.toString();
var previous_depth = 0;
var count_increasing = -1;
// Break up the file into lines.
  var lines = text.split('\n');
lines.forEach(function(line) {
    console.log(line);
    var parts = line.split(' ');
    var this_depth = parseInt(parts[0]);
    if (this_depth > previous_depth) {
        count_increasing++;
    }
    previous_depth = this_depth;
  });
console.log(count_increasing);
  // { A: 2, B: 14, C: 7 }
});