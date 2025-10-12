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


