/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestSubstring = 0
    let substring = new Set()
    let leftPointer = 0

    for (let rightPointer = 0  ; rightPointer < s.length; rightPointer++) {
        if (!substring.has(s[rightPointer])) {
            substring.add(s[rightPointer])
            longestSubstring = Math.max(longestSubstring, rightPointer - leftPointer + 1)
        } else {
            while (substring.has(s[rightPointer])) {
                substring.delete(s[leftPointer])
                leftPointer++
            }
            substring.add(s[rightPointer])
        }
    }

    return longestSubstring
};

/**
 * used a set to add the characters in the current substring
 * if currently iterated character is not in the set, add it. update longestSubstring if necesary
 * if it is in the set, delete the leftmost character until the character is not in the set, then add the current character
 */