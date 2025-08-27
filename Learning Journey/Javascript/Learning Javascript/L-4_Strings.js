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

const newString = gameName.substring(0,4);      // We get sub string like Dark ( we do not get the end index value in the substring)

console.log(newString);

const anotherString = gameName.slice(0,4);    //dark
const negString = gameName.slice(-10,4);    //ark 


console.log(anotherString);
console.log(negString);      


const newStringOne = "         Yeeshu          "

console.log(newStringOne);
console.log(newStringOne.trim());                      // we can use trim start & trim end. Trim removes the whitespaces plus line terminators.

const url = "https://yeeshu.com/yeeshu%25dwivedi"

console.log(url.replace('%25', '-'));

console.log(url.includes('cena'));

console.log(gameName.split('k'));                // ['Dar' , 'Reunion']



