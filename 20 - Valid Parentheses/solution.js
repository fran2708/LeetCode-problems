/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    if (s.length % 2 !== 0) {   // first check if its even. if it isn't, there's no way for it to be valid
        return false
    } else {
        for (c of s) {          // go through the string and check every character 'c'
            if (c === '(' || c === '{' || c === '[') {      // check if it's an opening one. if it is, push it onto the stack
                stack.push(c)
            } else {
                if (stack.length === 0 ||                   // if it's a closing one, check if there's an opening one in the stack, if there isn't return false
                    (c === ')' && stack[stack.length-1] !== '(') ||             // check every type of opening with the current closing character
                    (c === '}' && stack[stack.length-1] !== '{') ||
                    (c === ']' && stack[stack.length-1] !== '[')) {
                        return false
                    }
                stack.pop()             // if it matched, pop the opening one in the stack
            }
        }
    }

    return stack.length === 0           // if the stack is empty at this point, every opening got matched with a closing one
};