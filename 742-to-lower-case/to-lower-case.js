/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    return s.split("").map((letter) => 
        letter.toLowerCase()
    ).join("")
};