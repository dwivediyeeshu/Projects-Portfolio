const marvel_heroes = ["Spiderman", "Iron Man", "Captain America", "Thor"];
const dc_heroes = ["Batman", "Superman", "Flash", "Matian"];

//marvel_heroes.push(dc_heroes);      // Adds new element to the end of an Array the major problem is this it takes another Array as an element

// i.e - ["Spiderman", "Iron Man", "Captain America", "Thor", ["Batman", "Superman", "Flash", "Matian"] ]

//console.log(marvel_heroes);

//console.log(marvel_heroes[4][2]);  // used to get to get the array element inside the og array(nested array)

const all_heroes = marvel_heroes.concat(dc_heroes)  // combines to arrays into a new arrray without modifying the original array

console.log(all_heroes);

console.log(marvel_heroes);

// Most commonly used method to combine array ------------------------------------------

const all_new_heroes = [...marvel_heroes, ...dc_heroes]               // solves the limitation of concat(i.e multiple arrrays & values can be combined together)

console.log(all_new_heroes);


const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9,[6, 7, 45]]];

const real_another_array = another_array.flat(Infinity);          // returns a single array with all sub array recursively concated into 1

console.log(real_another_array);         // [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 7, 45]




console.log(Array.isArray("Yeeshu"));
console.log(Array.from("Yeeshu"));
console.log(Array.from({name: "Yeeshu"}));          // returns empty string. We need to mention on what basis the array should be made.
                                                    // i.e keys or values.
console.log(Array.from(123456677));            // does not convert a number [] 

let score1 = 1000
let score2 = 2000
let score3 = 4000

console.log(Array.of(score1, score2, score3))                // of returns a new array with set of elements

