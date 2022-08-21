// sum upto n
// Linear time complexity
const sumUpto = (n) => { 
    let sum =0
    for (let i = 0; i <= n; i++){
        sum+=i
    }
    console.log(sum);
}
const start = performance.now()
sumUpto()
const end = performance.now()
end-start


//sum upto N with Sequance
//constant time 
const constntSum = n => {
    return (n/2) * (n+1)
}

 
// Linear O(n)
// Constant O(1)
// Quadratic O(n^2)
// Qubic O(n^3)