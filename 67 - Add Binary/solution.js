/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // convert the strings to bigint in binary, add them, then use toString(2) to make it a string again
    // (2) is important to denote that the number being converted is binary
    let res = (a, b) => (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
    
    return res(a, b)
};