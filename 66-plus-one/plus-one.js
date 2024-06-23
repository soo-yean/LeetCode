/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let digitPlusOne = BigInt(digits.join('')) + BigInt(1);

    return digitPlusOne.toString().split(''); 
};