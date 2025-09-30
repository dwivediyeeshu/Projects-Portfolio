// let a = 10
// const b = 20
// var c = 30

//var c = 300
let a = 300

//{}           // scope - if it is with functions, if-else statement

if (true) {
  let a = 10;
  const b = 20;
  //var c = 30;
  console.log("INNER: ", a);
  
}

// console.log(a);
// console.log(b);
//console.log(c);
console.log("OUTER: ", a);


// 1. var creates a problem in this scenario as 30 is getting printed. rather than the Global scope c.
// 2. The Global scope in the console in browser is different that the global scope in Code environment node.

// Nested Scope

function one() {
    const username = "Yeeshu"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }

    //console.log(website);

    two();
    
}

one();

if (true) {
    const username = "Yeeshu"
    if (username === "Yeeshu") {
        const website = "youtube"
        console.log(username + website);
    }

    //console.log(website);   // throws error as website is not defined it is present in the if scope only
    
}

//console.log(username);  // throws error as username is defined it is present in the if scope.

// ++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++++++


addOne(5);   // works fine for this declaration
function addOne(num) {

    return num + 1
    
}

addOne(5);

addTwo(5); // error cannot access before initialization
// expression 
const addTwo = function (num) {
    return num + 2;
    
}

addTwo(5); // works fine
