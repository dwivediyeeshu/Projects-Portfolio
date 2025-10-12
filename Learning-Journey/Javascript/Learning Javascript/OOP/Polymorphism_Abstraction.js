// Abstraction

class CoffeeMachine {
  start() {
    //call DB
    //filter value
    return `Starting the machine...`;
  }

  brew() {
    // complex calculation
    return `Brewing coffee`;
  }

  pressStartButton() {
    let msgOne = this.start();
    let msgTwo = this.brew();
    return `${msgOne} + ${msgTwo}`;
  }
}

let myMachine = new CoffeeMachine();
console.log(myMachine.start());
console.log(myMachine.brew());
console.log(myMachine.pressStartButton());

class Car {
  start() {
    this.#checkFuel();
    this.#checkEngine();
    console.log("Car started 🚗💨");
  }

  // Private methods (implementation hidden)
  #checkFuel() {
    console.log("Checking fuel...");
  }

  #checkEngine() {
    console.log("Checking engine...");
  }
}

const myCar = new Car();
myCar.start(); // ✅ User just calls start()
// ❌ myCar.#checkFuel();  → Error (hidden)

// Polymorphism

class Animal {
  speak() {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark 🐶");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow 🐱");
  }
}

// Polymorphism in action
const animals = [new Dog(), new Cat(), new Animal()];

animals.forEach((a) => a.speak());

// Another example

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguin can't fly`;
  }
}

let bird = new Bird()
let penguin = new Penguin()

console.log(bird.fly());
console.log(penguin.fly());

// Static Method

class Calculator{
    static add(a,b){
        return a+b
    }
}

let miniCalc = new Calculator()
//console.log(miniCalc.add(2,3)); // error miniCalc.add is not a function



