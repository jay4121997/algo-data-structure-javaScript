const availableCoins = [8,6,5,1]
const targetAmout = 11


function computeChange(coins = [], amout) {
    let remainingAmont=amout
    const calculatedChange = {
        selectedCoin:{},
        numberOfCoin:0
    }
    const sortedCoin = coins.sort((a, b) => b - a)
    
    for(let coin of sortedCoin){
        const count = Math.floor(remainingAmont/coin) 
        calculatedChange[coin] = count
        calculatedChange.numberOfCoin+=count
        remainingAmont=remainingAmont-coin*count
    }    
    console.log(calculatedChange);
}
computeChange(availableCoins,targetAmout)