"use strict"; // treat all JS Code as newer version

// alert(3 + 3)  // we are using nodejs, not browser

// code readability should be high

let name = "yeeshu" //string data type
let age = 24 //number
let isLoggedIn = false //boolean
let notSet;
let empty = null;


/*  Primitive -
 number => 2 to power 53
 bigint
 string => ""
 boolean => true/false
 null => standalone value or empty value
 undefined => declared but not assigned
 symbol = > unique
 */

/* User Defined - 

Object

*/

console.log(typeof(null))  //object

// The data type of null is Object.

console.log(typeof(undefined))  //undefined

// Conversion & Operation

let score = "33abc"

console.log(typeof(score));
console.log(typeof score);

let  valueInNumber = Number(score);

console.log(typeof valueInNumber); 
console.log(valueInNumber); // NaN - Not a Number


// "33" => 33
// "33abc" => NaN(Not a number)
// true => 1; false => 0

let isLogged = 1

let booleanIsLoggedIn = Boolean(isLogged);

console.log(booleanIsLoggedIn);

//"" empty string => false
// "name" => true

//  --------------------- Operations --------------------------

let value = 3
let negValue = -value
console.log(negValue);

// Conversion one type to another

Number("123");  //123 (string + number)
String(123);    // "123" (number + string)
Boolean(0);     // false
Boolean("hi");  // true

// JS also does automatic type conversion(called type coercion)

"5" + 2;  //"52"  (string + number = string)

let gameCounter = 100
gameCounter++;
console.log(gameCounter);