function fibo(num) {
  const fib = []
  for(let i = 0; i <= num; i++){
    if( i >= 0){
    num1 = i - 1
    num2 = i - 2
    newNum = num1 + num2
    fib.push(newNum)
    }console.log(fib)
    return fib
    }
}

fibo(5)