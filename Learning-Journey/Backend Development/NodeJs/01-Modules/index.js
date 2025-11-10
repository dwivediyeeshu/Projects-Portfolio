const fs = require('fs')  //built in module

//console.log(fs);   // fs is an object which different functions.


const content = fs.readFileSync('notes.txt', 'utf-8')

console.log(content);
