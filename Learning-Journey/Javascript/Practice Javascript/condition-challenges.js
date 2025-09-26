// 1. Checking if a number is greater than another number:

let num1 = 25;
let num2 = 40;

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("Nope!!, num1 is not greater");
}

// 2. Checking if a string is equal to another string:

let username = "chai";
let anotherUsername = "chai";

if (username == anotherUsername) {
  console.log("Pick another username");
} else {
  console.log("username accepted");
}

// 3. Checking if a variable is a number or not:

//let score = 44 - Eg1
let score = "44";

if (typeof score === "number") {
  console.log("Yep, this is a number");
} else {
  console.log("No, this is not a number");
}

// 4. Checking if a boolean value is true or false:

let isTeaReady = false;

if (isTeaReady) {
  console.log("Tea is Ready");
} else {
  console.log("Tea is Not Ready");
}

// 5. Checking if an array is empty or not:

let items = [];

if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is Not Empty");
}
