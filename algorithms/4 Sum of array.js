const sumOfArray = (arr = []) => { 
    let sum=0
    if (arr.length > -1) {
        
        // for (let i = 0; i < arr.length;i++) {
        //     sum+=arr[i]
        // }
        for (let num of arr) {
            sum+=num
        }
    }
    console.log(sum);
}
sumOfArray([1, 2, 3, 4, 5])

// O(n)