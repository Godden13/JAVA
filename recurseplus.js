function add(num) {
  if(num > 0) {
    return num + add(num - 1)
  }else {
    return num
  }
}

console.log(add(9))