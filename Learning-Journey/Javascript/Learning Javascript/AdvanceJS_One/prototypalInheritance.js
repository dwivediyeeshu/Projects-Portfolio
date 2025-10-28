// An object can use properties and methods from another object — its prototype.

// In JavaScript, everything is built on objects — and objects can inherit properties and methods from other objects.
// This system is called Prototypal Inheritance.

const person = {
  greet() {
    console.log("Hello!");
  }
};

const student = Object.create(person); // student inherits from person
student.study = function() {
  console.log("Studying...");
};

student.greet(); // Inherited from person
student.study(); // Own method


function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, I'm ${this.name}`);
};

const john = new Person("John");
john.greet(); // Hello, I'm John


class Teacher {
  greet() {
    console.log("Hello!");
  }
}

class Student extends Teacher {
  study() {
    console.log("Studying hard!");
  }
}

const student1 = new Student();
student1.greet(); // from Teacher
student1.study(); // from Student


// Even though this looks like classical inheritance (like Java or C++),
// under the hood JavaScript is still using prototypal inheritance.