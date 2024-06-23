/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let digitPlusOne = BigInt(digits.join('')) + BigInt(1);

    return digitPlusOne.toString().split(''); 
};

/**
 * My first attempt was using parseInt, but it failed the test where the digit becomes extremely large.
 * It was because JavaScript's parseInt function have limitations on the size of integers it can handle.
 * So I had to switch to using BigInt, which can handle arbitrarily large integers without losing precision.
 */
