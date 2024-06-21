/** 
 * Approach 1: Brute Force
    Loop through each element x, and find if there is another value that equals to target when added to x.
    

 * Complexity Analysis
    Time complexity: O(n^2)
    For each element, we try to find its complement by looping through the rest of the array which takes O(n) time. 

    Space complexity: O(1)
    The space required does not depend on the size of the input array, so only constant space is used.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let output = []

    for (let i = 0; i<nums.length; i++) {
        for (let j = i+1; j <nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                output.push(i,j)
            }
        }
    }

    return output;
};



