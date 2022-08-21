// sum upto n
// Linear time complexity
//Time each line is executed               n=1     n=3     n=10        n=n
const sumUpto = (n) => { 
    let sum =0                             //1      //1     //1         //1
    for (let i = 0; i <= n; i++){          //1      //1     //1         //1
        sum+=i                             //1      //3     //10        //n
    }   
    console.log(sum);                      //1      //1     //1         //1
}

// sum upto n
// Constant time complexity
//Time each line is executed               n=1     n=3     n=10        n=n
const sumUpto1 = (n) => { 
    return (n/2) * (n+1)                  //1      //1     //1         //1
}
