/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let solution = []
    let prevSolution = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            // if the character is a space, clear solution to start saving the next word
            // save the solution to prevSolution in case there is no next word
            if (solution.length !== 0) prevSolution = solution
            solution = []
            console.log(prevSolution)
        } else {
            solution.push(s[i])
        }
    }
    // return the length of solution, or prevSolution if solution was cleared
    return (solution.length !== 0 ? solution.length : prevSolution.length)
};