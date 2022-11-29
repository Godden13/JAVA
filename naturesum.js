function add(num) {
  if (num > 0) {
    return num + add(num - 1)
  } else {
    return num
  }
}
let num = 5
console.log(`The sum of the natural number ${num} is ${add(num)}`)