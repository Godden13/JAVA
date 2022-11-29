const color = ["Black", "Red", "Cassava", "Square"]
const num = [['ace', 2, 3], [4, 5, 6], [7, 8, 9]]

for (let i of num){
  for(let j of i){
    console.log(`${Math.floor(Math.random() * (j))} OF ${Math.floor(Math.random() * (color))}`)
  }
}

  // let j = Math.floor(Math.random() * i);
