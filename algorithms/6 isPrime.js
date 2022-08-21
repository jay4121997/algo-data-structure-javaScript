function isPrime(n) {
    // let res = true
    // let i=2
    // while (res && i<n) {
    //     res = n % i === 0 ? false : true
    //     i++
    // }
    // return res
    // for (let i = 2; i < n; i++){
    for (let i = 2; i < Math.sqrt(n); i++){
        if (n % i === 0) {
            return false
        }
    }
    return true
}
isPrime(5)