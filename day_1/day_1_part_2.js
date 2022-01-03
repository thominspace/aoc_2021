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
    var count_increasing = 0;

    // hold on to cumulative sum
    const cumsum = [0];
    const window_len = 3;
    // Break up the file into lines.
    var lines = text.split('\n');
    lines.forEach(function(line, ix) {
        var parts = line.split(' ');
        var this_depth = parseInt(parts[0]);
        if (cumsum.length == 0) {
            cumsum.push(this_depth)
        } else {
            cumsum.push(this_depth + cumsum[cumsum.length - 1])
        }
        // console.log(ix, line, cumsum[ix]);
    });
    console.log(cumsum)
    console.log("--------")

    // find increasing in a 3 element window
    for(let ix = 0; ix < cumsum.length; ix++) {
        var back_ix = ix - window_len;
        if (back_ix < 0) {
            back_ix = 0;
        }
        if (ix == window_len) {
            previous_depth = cumsum[ix]
        }
        if (ix > window_len) {
            if ((cumsum[ix] - cumsum[back_ix] > previous_depth)){
                count_increasing++;
                console.log("increasing")
            }
            previous_depth = cumsum[ix] - cumsum[back_ix];
        }
        console.log(lines[ix], cumsum[ix], cumsum[ix] - cumsum[back_ix], count_increasing);
    }

    console.log(count_increasing);
});