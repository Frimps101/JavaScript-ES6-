import {Animal, Dog} from './example.js'

let cat = new Animal('cat', 4);

cat.legs = 3
//console.log(cat.detail())

let cow = new Animal('cow', 4)
//cow.makeSound('moo')

//cow.detail()

//Animal.move()

//console.log(cat.type)

let dog = new Dog('dog', 4, true)

dog.makeSound('bark')