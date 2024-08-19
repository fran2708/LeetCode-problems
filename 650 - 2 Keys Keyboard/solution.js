/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    let steps = 0
    let div = 2

    while (n > 1) {
        while (n % div === 0) {
            steps += div
            n = n / div
        }
        div++
    }
    return steps
};

/**
 * When we look at the problem, the main challenge is to minimize the number of operations required to produce exactly n characters 'A' using only "Copy All" and "Paste" operations
 * Since "Copy All" copies everything on the screen, it suggests that we should think in terms of copying when we have a beneficial number of 'A's that will allow us
 * to reach n through multiple pastes. This leads us to consider the factors of n because these represent meaningful points at which we can perform a "Copy All" to maximize efficiency
 * 
 * 1.Factorization Insight: To minimize the number of operations, break down the number n into its prime factors
 * Each factor corresponds to a sequence where you repeatedly paste after a "Copy All" operation
 * 
 * 2.Iterative Process:
 * Start with the smallest factor (beginning with 2)
 * Divide n by this factor as long as possible, adding the factor to the total steps each time you divide
 * Move to the next larger factor and repeat until n is reduced to 1

3. Sum of Factors: The sum of these factors will give the minimum number of operations required
 */