/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/

let num = 1;
let sum = 0;

while (num <= 5) {
    sum += num;
    num++;
}

console.log(`Sum is ${sum}`);


/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

let i = 5
let countdown = []

while(i>0){
    console.log(`The countdown is ${i}`);
    countdown.push(i);

    i--;
    
}

console.log(countdown);


/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/

// let teaCollection =  []
// let tea 
// do {
//     tea = prompt(`Enter your favourite tea (type "stop" to finish)`)

//     if(tea !== "stop")
//     {
//         teaCollection.push(tea)
//     }
// } while (tea !== "stop");

// console.log(teaCollection);


/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

let total = 0
let k = 1;

do {
    total+= k;
    k++;
    
} while (k<=3);


console.log(total);


/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

const arr = [2, 4, 6]
const multipliedNumbers = []

for (let index = 0; index < arr.length; index++) {
    const element = arr[index] * 2;
    multipliedNumbers.push(element)
    
}

console.log(multipliedNumbers);




/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

let cities = ["Paris", "New York", "Tokyo", "London"]
let cityList = []

for (let index = 0; index < cities.length; index++) {
    const myCity = cities[index];
    cityList.push(myCity)

    
}

console.log(cityList);

