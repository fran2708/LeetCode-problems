/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ""
    }
    let comparison = []
    let stringArrays = []
    let result = ""
    for (let i = 0; i < strs.length; i++) {
        stringArrays.push(strs[i].split(''))
        if (stringArrays[i][0] === undefined) {
            return ""
        }
    }

    for (let i = 0; i < stringArrays[0].length; i++) {
        comparison.push(stringArrays[0][i])
        for (let y = 1; y < strs.length; y++) {
            if (comparison[i] !== stringArrays[y][i]) {
                return result
            }
        }
        result += comparison[i]
    }
    return result
};

// this is not performant at all, will try to improve
// but it works...

// the following version is more performant (57 ms vs 61 ms) but still not ideal

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return ""
    }
    let stringArrays = []
    let result = ""
    for (let i = 0; i < strs.length; i++) {
        stringArrays.push(strs[i].split(''))
        if (stringArrays[i][0] === undefined) {
            return ""
        }
    }

    let comparison = stringArrays[0]

    for (let i = 0; i < comparison.length; i++) {
        for (let y = 1; y < strs.length; y++) {
            if (comparison[i] !== stringArrays[y][i]) {
                return result
            }
        }
        result += comparison[i]
    }
    return result
};