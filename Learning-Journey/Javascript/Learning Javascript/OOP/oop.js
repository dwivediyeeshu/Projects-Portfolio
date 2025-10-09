let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,

  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John", 26);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

Array.prototype.yeeshu = () => `Custom method ${this}`;

let myArray = [1, 2, 3];

console.log(myArray.yeeshu());

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} car from ${this.make} `;
  }
}

// Inheritance

class Car extends Vehicle{
  drive(){
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Supra")
console.log(myCar.start());
console.log(myCar.drive());

let vehOne = new Vehicle("Tata", "Safari")
console.log(vehOne.make);



