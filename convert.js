// function convert(number) {
//   let arr = [];
//   if(number >= 1) {
//     arr.push(number % 2);
//     convert(Math.floor(number/2));
//   }
//   console.log(arr);
// }


// convert(4)


function convert(num) {
  let arr = []
  while(num > 0) {
    arr.push(num % 2)
    num = parseInt(num / 2)
  }
  arr = arr.reverse()
  console.log(...arr)
  
}

convert(4)

