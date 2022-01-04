#!javascript
// Load the fs (filesystem) module.
var fs = require('fs');

// input_file = 'test_input.txt'
input_file = 'input.txt'

// setup variables needed
var zero_count = [];
var one_count = [];

// Read the contents of the file into memory.
fs.readFile(input_file, function (err, file_data) {
    // If an error occurred, throwing it will
    // display the exception and kill our app.
    if (err) throw err;
    // file_data is a Buffer, convert to string.
    var text = file_data.toString();
    // Break up the file into lines.
    var oxygen_lines = text.split('\n');
    var co2_lines = text.split('\n');


    // search lines for oxygen and CO2 ratings
    var oxygen_rating_search = "";
    var co2_rating_search = "";
    var oxygen_solution = "";
    var co2_solution = "";

    for (var ix = 0; ix < oxygen_lines[0].length; ix++) {
        
        // setup variables needed
        zero_count = [];
        one_count = [];

        // Run through lines and process 
        oxygen_lines.forEach(function(line) {
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

        // extend search string prefix
        if (zero_count[ix] > one_count[ix]) {
            oxygen_rating_search = oxygen_rating_search.concat("0");
        } else {
            oxygen_rating_search = oxygen_rating_search.concat("1");
        }

        // setup variables needed
        zero_count = [];
        one_count = [];

        // do it again for co2 
        co2_lines.forEach(function(line) {
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

        // extend search string prefix
        if (zero_count[ix] > one_count[ix]) {
            co2_rating_search = co2_rating_search.concat("1");
        } else {
            co2_rating_search = co2_rating_search.concat("0");
        }


        // go through oxygen lines and check
        var temp_oxygen_lines = [];
        oxygen_lines.forEach(function(line) {
            if (line.startsWith(oxygen_rating_search)) {
                temp_oxygen_lines.push(line);
            }
        });
        oxygen_lines = temp_oxygen_lines;
        // console.log(oxygen_lines)
        
        if (oxygen_lines.length == 1) {
            oxygen_solution = parseInt(oxygen_lines, 2)
            console.log("oxygen_solution: ", oxygen_solution)
        }

        // go through oxygen lines and check
        var temp_co2_lines = [];
        co2_lines.forEach(function(line) {
            if (line.startsWith(co2_rating_search)) {
                temp_co2_lines.push(line);
            }
        });
        co2_lines = temp_co2_lines;
        
        if (co2_lines.length == 1) {
            co2_solution = parseInt(co2_lines, 2)
            console.log("co2_solution: ", co2_solution)
        }


    }

    console.log("final solution: ", oxygen_solution*co2_solution)
});