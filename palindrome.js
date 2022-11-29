let pali = "dad"
let arr = pali.split('')

let arr1 = arr.reverse()
reversestring = arr1.join('')

if (pali == reversestring) {
  console.log("This string is a palindrome")
} else{
  console.log("This is not a palindrome")
}

console.log(pali)
console.log(reversestring)