const score = 200
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));      //precision value is 2


const otherNumber = 23.89797;

console.log(otherNumber.toPrecision(3));      // priority is given before decimal first. So do it accordingly


const hundreds = 1000000;

console.log(hundreds.toLocaleString('en-IN'));                  //make large number easier to read. If we dont give en-IN, the default is the american system

// --------------------- Maths ------------------------------------------------

console.log(Math);

let newNumber = -277
let decNumber = 4.76

console.log(Math.abs(newNumber));     // 277  - Positive number
console.log(Math.round(decNumber));   // 5 - Rounding off
console.log(Math.ceil(decNumber));    // 5 - Upper Value
console.log(Math.floor(decNumber));   // 4 - Lower Value

console.log(Math.max(4, 6, 7, 9, 21));    // 21 max value
console.log(Math.min(4, 3, 2, 22, 65, 66));    // 2 min value


console.log(Math.random());       // Gives value between  0 & 1
console.log((Math.random()*10) + 1);           // min value will be 1 
console.log((Math.random()*10) + 1);  

console.log(Math.floor(Math.random()*10) + 1); 


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);        // formula to get the value in a given range