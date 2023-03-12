function cartesianProduct(setA, setB) {
    const product = []
    for (let aEl of setA) {
        if (!Array.isArray(aEl)) {
            aEl = [aEl]
        }
        for (let bEl of setB) {
            product.push([...aEl,bEl])
        }
    }
    return product
}

function full(...sets) {
    let tempProduct = sets[0]

    for (let i = 1; i < sets.length; i++){
        tempProduct = cartesianProduct(tempProduct,sets[i])
    }
    return tempProduct
}



const colour = ['red','blue']
const size = ['S','M', 'L']
const style = ['style 1','style 2']
console.log(full(colour, size,style));


// Time Complexity O(n * m) or O(n^2)
// Space Complexity O(n * m) or O(n^2)

// for any length of sets provided 
// O(n * x) where x is numbers of sets provided

