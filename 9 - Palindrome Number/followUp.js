/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let containerArray = []
    let tempX = x
    while (tempX) {
        let n = tempX % 10
        containerArray.push(n)
        tempX = (tempX - n) / 10
    }
    let reverse = containerArray.reduce(function (accum, digit) {
        return(accum * 10) + digit
    }, 0)
    return reverse === x
};

/*
Problem with this solution is that it doesn't work with negative numbers
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let reverse = 0
    let tempX = x                       // copy the input here eg -1589

    while (tempX > 0) {
        let digit = tempX % 10          // i=0 => -1589 % 10 = 9 | i=1 => -158 % 10 = 8 | ...
        reverse = reverse * 10 + digit  // i=0 => 0 * 10 + 9 = 9 | i=1 => 9 * 10 + 8 = 98 | ...
        tempX = Math.floor(tempX / 10)  // i=0 => -1589 / 10 rounded down = -158 | i=1 => -158 / 10 rounded down = -15 | ...       
    }
    return reverse === x                // === to check that's still an integer
};
