function difference(setA, setB) {
  let differenceSet = new Set(setA)
  for (let i of setB) {
    for 
  differenceSet.delete(i)  
}
return differenceSet
}

let setA = new Set(['apple', 'mango', 'orange'])
let setB = new Set(['apple', 'grapes', 'banana'])

let result = difference(setA, setB)
console.log(result)