function multiply(num, times) {
  const multiplied = []
  for (let i = 1; i <= times; i++) {
    let newNum = num * i
    multiplied.push(newNum)
    
  }  console.log(multiplied)
   return multiplied
}
const multi = multiply(4, 10)
