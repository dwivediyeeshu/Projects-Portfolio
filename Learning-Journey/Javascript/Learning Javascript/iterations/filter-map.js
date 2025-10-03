//const programming = ["js", "rb", "py", "java", "cpp", "C#"];

/*
const values = programming.forEach( (item) => {
    console.log(item);
    
})

*/

//console.log(values);     //undefined for each doest not return any value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4)

const newNum = myNums.filter( (num) => {
    return num > 4
    
})

const newNumber = []

myNums.forEach( (num) => {
    if (num>4) {
        newNumber.push(num)
    }
})


console.log(newNums);
console.log(newNum);
