/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let counter = 1
    for (let i = 1; i < nums.length; i++) {         // this will set the original array with all unique numbers at the beginning
        if (nums[i] !== nums[i-1]) {                // and return the counter which is the sum of all unique numbers
            nums[counter] = nums[i]
            counter++
        }

    }  
    return counter
};