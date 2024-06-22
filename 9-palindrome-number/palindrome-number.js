/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversed = parseFloat(
        x
            .toString()
            .split('')
            .reverse()
            .join('') 
        )
           

    return x === reversed;
};