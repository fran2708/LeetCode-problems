/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binary = num.toString(2)
    let complement = ""

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === "1") {
            complement += "0"
        } else {
            complement += "1"
        }
    }

    return parseInt(complement, 2)
};