/*
    have a list containging item and weight 

    we hvae been given max weight 

    need to find the biggest possibele sol 
*/


function knapsack(elements, capacity) {
    const sack = { item: [], value: 0, weight: 0 }
    let remCap =capacity
    for (let el of elements) {
        if (el.weight <= remCap) {
            sack.item.push(el)
            sack.value += el.value
            sack.weight += el.weight
            remCap-=el.weight
        }
    }
    return sack
}

const items = [
    { name: 'a', value: 3, weight: 3 },
    { name: 'b', value: 6, weight: 8 },
    { name: 'c', value: 10, weight: 3 },
  ];
  const maxCap = 8;
  const sack = knapsack(items, maxCap);
  console.log(sack);
  