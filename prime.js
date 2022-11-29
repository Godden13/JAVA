class Person{
  constructor(name, age){
    this.name = name
    this.age = age
  }
}

const person1 = new Person('John')
const person2 = new Person('jack', 26)
console.log(person2.age)