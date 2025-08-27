// Strings are text values inside quotes " " or ' ' or backticks `

const name = "Yeeshu"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello My Name is ${name} and my repo count is ${repoCount}`); // Modern way


const gameName = new String('DarkReunion');    //object type

console.log(typeof gameName);
console.log(gameName);     // [String: 'DarkReunion']

console.log(gameName[0]);                 // D

console.log(gameName.__proto__);           // We got object {}


console.log(gameName.length);
console.log(gameName.toUpperCase());    // upper case
console.log(gameName.toLowerCase());    // lower case
console.log(gameName.charAt(4));        // Character at position 4
console.log(gameName.indexOf('R'));

// Does not change the original string.

