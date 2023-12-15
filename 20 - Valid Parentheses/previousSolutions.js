// first i tried to remove every pair until there weren't any more pairs
// this was awful performance wise
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    do {
        s = s.replaceAll('()', '')
        s = s.replaceAll('{}', '')
        s = s.replaceAll('[]', '')
    } while (s.indexOf('()') !== -1 || s.indexOf('{}') !== -1 || s.indexOf('[]') !== -1)

    return s.length === 0
};


// then i tried using a stack like the final solution
// but tried to use arrays for the opening and closing characters

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    if (s.length % 2 !== 0) {
        return false
    } else {
        let opening = ['(', '[', '{']
        let closing = [')', ']', '}']       // in the end, didn't even use the closing array

        for (c of s) {
            if (opening.includes(c)) {      // checking this array this way wasn't that performant either
                stack.push(c)
            } else {
                if (stack.length === 0 ||   // the rest is pretty much the same
                    (c === ')' && stack[stack.length-1] !== '(') ||
                    (c === '}' && stack[stack.length-1] !== '{') ||
                    (c === ']' && stack[stack.length-1] !== '[')) {
                        return false
                    }
                stack.pop()
            }
        }
    }

    return stack.length === 0
};