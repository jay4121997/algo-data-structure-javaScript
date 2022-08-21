/*
   Resucsion + Memoization(store inter mediate results)
*/
const fib = (n, MEMO) => {
    let result
    if (MEMO[n]) return MEMO[n]
    
    if (n === 0 || n === 1) return 1
    else result = fib(n - 1) + fib(n - 2)

    MEMO[n] = result
    
    return result
}


