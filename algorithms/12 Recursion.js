const fact = n => {
    if (n === 1) return 1;
    return (n * fact(n-1))
}
console.log(fact(3));



// Every expression is called O(1)
//  but the entire Function is called O(n) times 
//  O(n)