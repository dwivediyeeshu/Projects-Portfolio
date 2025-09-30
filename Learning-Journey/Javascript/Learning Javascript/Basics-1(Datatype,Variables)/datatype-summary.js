// JavaScript Data Types

// 1. Primitive (immutable, stored by value):**

/* 
String → "Hello"

Number → 10, 10.5, NaN, Infinity

BigInt → 123n (for very large ints)

Boolean → true/false

undefined → declared but not assigned

null → intentional empty value

Symbol → unique identifiers

*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);   //false Value will not be same


// 2. Non - Primitive(objects, stored by reference):**

/* Object → { key: value }

Array →[1, 2, 3]

Function → function() { }

Date, RegExp, etc. (special objects)

*/

const heroes = ["spiderman", "shaktiman", "naagraj"]

let myObj = {

    name: "yeeshu",
    age: 24,
}

const myFunction = function(){
    console.log("Hello World");
}

// Call by Value vs Call by Reference

// Call by Value (primitives):

// Copy of value is passed → changes don’t affect original.

let x = 10;
let y = x; 
y = 20; // x still 10

console.log(x);


//Call by Reference (objects):

//Reference (address) is passed → changes affect original.

let obj1 = {a:1};
let obj2 = obj1;
obj2.a = 5; // obj1.a also 5

console.log(obj1.a);

// Javascript is Dynamically Typed.


// ---------------------------------------------------------------------------------------------------------------------


// Stack(Primitve), Heap Memory (Non-Primitive)