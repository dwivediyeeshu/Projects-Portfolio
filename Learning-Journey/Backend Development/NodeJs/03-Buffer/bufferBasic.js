const { Buffer } = require('node:buffer')

//Example - 1
const buf = Buffer.alloc(4);
console.log(buf);

// Example - 2
const bufTwo = Buffer.from('Hello John Cena')
console.log(bufTwo);
console.log(bufTwo.toString());
console.log(bufTwo.toJSON());

// Example - 3
const bufThree = Buffer.alloc(10);
bufThree.write('Hello')
console.log(bufThree.toString());

// Example - 4
const bufFour = Buffer.from("Chai aur code");
console.log(bufFour.toString());
console.log(bufFour.toString('utf-8', 0, 4));
console.log(bufFour);
bufFour[0] = 0x4A
console.log(bufFour);
console.log(bufFour.toString());

// Example - 5

const buf1 = Buffer.from("Chai aur");
const buf2 = Buffer.from(" code");
const merged = Buffer.concat([buf1, buf2])
console.log(merged);
console.log(merged.toString());
console.log(merged.length);






