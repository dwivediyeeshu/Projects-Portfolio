// Dates

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);          // Object

let myCreatedDate = new Date(2024, 0, 25);
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();

console.log(myTimeStamp);                       // value is in millisecond
console.log(myCreatedDate.getTime());           // value is in millisecond

// to convert value in second

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// ` ${newDate.getDay()} and the time `

newDate.toLocaleString('Default', {
    weekday: "long",
})