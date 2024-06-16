/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // start from the right (digits.length -1) and start with the loop
    // add the carry to the current digit
    // if the current digit is 10, set it to 0 and keep the carry to keep the loop going
    // if i'm in index 0, unshift to add to the beginning of the array
    // if current number doesnt result in 10, make the carry 0 to stop the loop
    let index = digits.length -1
    let nums = [...digits]
    let carry = 1
    
    while (carry) {
        const current = nums[index] + carry
        if (current === 10) {
            nums[index] = 0
            if (index === 0) {
                nums.unshift(carry)
                carry = 0
            }
        } else {
            nums[index] = current
            carry = 0
        }
        index--
    }
    
    return nums
};