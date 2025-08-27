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

