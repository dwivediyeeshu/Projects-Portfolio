const fs = require('fs')  //built in module

// const fs = require('node:fs')  - node tells us if its a built in function or other

//console.log(fs);   // fs is an object which different functions.


const content = fs.readFileSync('notes.txt', 'utf-8')

fs.writeFileSync('copy.txt', content, 'utf-8');  // this overwrites the content of the file

fs.appendFileSync('notes.txt', '\n\nhey', 'utf-8')  // add the content to the file

// console.log(content);

// fs.mkdirSync('games/xyz/a', {recursive: true}) // to create a new directory


// Need to remove individual directories as you cannot delete a directory with sub directories directly
// fs.rmdirSync('games/xyz/a')
// fs.rmdirSync('games/xyz')
//fs.rmdirSync('games')

fs.unlinkSync('copy.txt')  // deletes a file
