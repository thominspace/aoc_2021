#!javascript
// Load the fs (filesystem) module.
var fs = require('fs');
// input_file = 'test_input.txt'
input_file = 'input.txt'
// Read the contents of the file into memory.
var horz = 0;
var depth = 0;
var aim = 0;
fs.readFile(input_file, function (err, file_data) {
    // If an error occurred, throwing it will
    // display the exception and kill our app.
    if (err) throw err;
    // file_data is a Buffer, convert to string.
    var text = file_data.toString();
    // Break up the file into lines.
    var lines = text.split('\n');
    lines.forEach(function(line) {
        console.log(line);
        var splitlines = line.split(" ")
        if (splitlines[0] == "forward") {
            horz += parseInt(splitlines[1])
            depth += parseInt(splitlines[1])*aim
        } else if (splitlines[0] == "down") {
            aim += parseInt(splitlines[1])
        } else if (splitlines[0] == "up") {
            aim -= parseInt(splitlines[1])
        }
    });
    console.log("horz: ", horz, "depth: ", depth, "ans: ", horz*depth);
    // { A: 2, B: 14, C: 7 }
});