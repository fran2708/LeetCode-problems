/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let counter = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[counter] = nums[i]
            counter++
        }
    }
    return counter
};

/* 
this solution i did pretty much what i did on problem 26
started counter on 0 since i didn't have to compare with previous number
*/