function isPrimeNumber(number){
  let count = 0
  for (let i = 1; i <= number; i++) {
    if(number % i == 0) {
      count++
    }
  }
  return count <= 2;
} 

function print(number) {
  const prime = []
  for (let i = 1; i <= number; i++){
    if(isPrimeNumber(i)) {
      prime.push(i)
    }
  }    console.log(prime)
    return prime
}

const prime = print(10)

console.log(prime[3])