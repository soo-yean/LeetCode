/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set(nums);

    if (nums.length !== Array.from(set).length) {
        return true
    } else {
        return false;
    }
};