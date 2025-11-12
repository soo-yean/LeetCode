/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const count = new Object();

    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    return Number(Object.keys(count).find(num => count[num] === 1));
};