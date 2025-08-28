//   array

const myArr = [0 , 1 , 2, 3, 4, 5]   // Arrays are resizable in JS & can contain mix of elements

//  JS arrays are not associative arrays.

// JS array-copy operations create shallow copies rather than deep copies. 
// Shallow copy of an object is a copy who shares same reference as those of the source.

console.log(myArr[0]);

const myHeroes = ["shaktiman", "spiderman", "goku"]

const myArr2 = new Array(1, 2, 3, 4);   // array declaration

console.log(typeof(myArr))                 // object output
console.log(typeof(myArr2))

// ----- Array Methods ---------

myArr.push(6)
myArr.push(7)

console.log(myArr);

myArr.pop()        // removes last element in array

console.log(myArr)

myArr.unshift(9)                // inserts the element at first element

console.log(myArr)

myArr.shift()                   // removes the first element from the array

console.log(myArr)                 

console.log(myArr.includes(21));          // element present in the array or not(true or false)
console.log(myArr2.indexOf(3));         // location of an element. -1 for elements not existing in the array

const newArr = myArr.join()             // binds & converts the array into string

console.log(newArr);

console.log(typeof newArr);

// Slice & Splice ------------------------------------------------
console.log("A ", myArr);

const newArrTest1 = myArr.slice(1,3)     // Gives a sub array of elements present at the indices, The range element is not present

console.log(newArrTest1);

console.log("B ", myArr)

const newArrTest2 = myArr.splice(1,3);             // Gives a sub array of elements including the range element.

console.log(newArrTest2);

console.log("C ", myArr);  // [0, 4, 5, 6]


// Major difference between slice & splice is that Splice changes the original array (i.e removes the sub array selected in Splice function from the orginal array)

