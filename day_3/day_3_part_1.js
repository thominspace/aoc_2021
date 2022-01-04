#!javascript
// Load the fs (filesystem) module.
var fs = require('fs');

// input_file = 'test_input.txt'
input_file = 'input.txt'

// setup variables needed
let zero_count = [];
let one_count = [];

// Read the contents of the file into memory.
fs.readFile(input_file, function (err, file_data) {
    // If an error occurred, throwing it will
    // display the exception and kill our app.
    if (err) throw err;
    // file_data is a Buffer, convert to string.
    var text = file_data.toString();
    // Break up the file into lines.
    var lines = text.split('\n');

    // Run through lines and process
    
    lines.forEach(function(line) {
        for (var ix = 0; ix < line.length; ix++) {
            // go through each character
            // console.log(line.charAt(ix));

            // check if we have a spot to report the number
            while (zero_count.length <= ix) {
                zero_count.push(0);
            }
            while (one_count.length <= ix) {
                one_count.push(0);
            }

            // push character count
            if (line.charAt(ix) === '0') {
                zero_count[ix] += 1;
            } else {
                one_count[ix] += 1;
            }
        }
        // console.log(line);
    });
    // print answers
    console.log("zero_count: ", zero_count, "one_count: ", one_count);

    // gamma rate is the binary rep of the most common 0s and 1s across all strings
    var gamma_rate_str = ""
    var epsilon_rate_str = ""
    for (var ix = 0; ix < zero_count.length; ix++) {
        if (zero_count[ix] > one_count[ix]) {
            gamma_rate_str = gamma_rate_str.concat("0");
            epsilon_rate_str = epsilon_rate_str.concat("1");
        } else {
            gamma_rate_str = gamma_rate_str.concat("1");
            epsilon_rate_str = epsilon_rate_str.concat("0");
        }
    }
    // convert gamma rate from binary to decimal
    var gamma_decimal = parseInt(gamma_rate_str, 2);
    var epsilon_decimal = parseInt(epsilon_rate_str, 2);
    console.log("gamma_rate_str: ", gamma_rate_str);
    console.log("gamma_decimal: ", gamma_decimal);
    console.log("epsilon_rate_str: ", epsilon_rate_str);
    console.log("epsilon_decimal: ", epsilon_decimal);
    console.log("gamma_decimal*epsilon_decimal: ", gamma_decimal*epsilon_decimal);
});