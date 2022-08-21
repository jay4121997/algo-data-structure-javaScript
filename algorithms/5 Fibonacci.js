function fib(n) { 
    const number = [1, 1]
    for (let i = 2; i < n + 1; i++){
        number.push(number[i-2]+number[i-1])
    }
    console.log(number);
}
fib(5)
// Time Complexity O(n)

