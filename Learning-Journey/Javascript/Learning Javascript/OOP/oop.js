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

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Supra");
console.log(myCar.start());
console.log(myCar.drive());

let vehOne = new Vehicle("Tata", "Safari");
console.log(vehOne.make);

// Encapsulation

// class BankAccount{
//   #balance = 0;

//   deposit(amount){
//     this.#balance += amount;
//     return this.#balance
//   }

//   getBalance(){
//     return `$ ${this.#balance}`;
//   }

// }

// let account = new BankAccount();
// console.log(account.getBalance());

// Getter and Setter

class BankAccount {
  #balance = 0; // private field

  constructor(owner) {
    this.owner = owner;
  }

  // Getter — allows reading the private value safely
  get balance() {
    return `Your current balance is ₹${this.#balance}`;
  }

  // Setter — allows controlled modification
  set deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`₹${amount} deposited successfully.`);
    } else {
      console.log("Invalid deposit amount!");
    }
  }

  // You can still have private helper methods too
  #logTransaction(type, amount) {
    console.log(`[LOG] ${type}: ₹${amount}`);
  }
}

const acc = new BankAccount("Yeeshu");

acc.deposit = 1000; // ✅ Calls setter
console.log(acc.balance); // ✅ Calls getter

//console.log(acc.#balance); // ❌ Error: Private field '#balance' is not accessible


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


