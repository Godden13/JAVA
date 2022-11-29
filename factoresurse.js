// function facto(num){
//   if(num > 0) {
//     return num * facto(num - 1)
//   } else {return 1}
// }

// let num = 4
// console.log(`The factorial of ${num} is ${facto(num)}`)

var num = 4
let fact = 1;
for (let i = 1; i <= num; i++) {
  fact *= i
}
console.log(`The factorial of ${num} is ${fact}`)