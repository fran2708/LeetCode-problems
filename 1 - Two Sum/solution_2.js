// this solution uses a Map to check if the target minus the current value being iterated is in the map
// time complexity is O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsMap = new Map()                       // create the map
    for (let i = 0; i < nums.length; i++) {         // iterate through the array
         const x = target - nums[i]                 // get the value to search for
         if (numsMap.has(x)) {
             return [numsMap.get(x), i]             // if found, return the answer
         }
         numsMap.set(nums[i], i)                    // if not, set the current value to the map
    }
};