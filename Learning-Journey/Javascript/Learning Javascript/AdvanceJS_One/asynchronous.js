// asynchronous means that some operations can happen in the background, without blocking the main thread (the main flow of code).

// JavaScript is single-threaded, meaning it can execute one task at a time. But with asynchronous behavior, it can start a task (like fetching data from an API), continue executing other code, and come back to the first task once it’s done — without freezing the app.

// Synchronous -
console.log("Start");

function task() {
  console.log("Task complete");
}

task();
console.log("End");

// Output 
/*
Start
Task complete
End

Everything runs in order, line by line.
*/

// Asynchronus

console.log("Start");

setTimeout(() => {
  console.log("Async Task complete");
}, 2000);

console.log("End");

// Output 
/*
Start
End
Async Task complete.

Here, setTimeout() is asynchronous — it schedules a task for later.
JavaScript doesn’t wait for 2 seconds — it moves on and runs the rest of the code.
*/


console.log("Fetching user...");

fetch("https://api.github.com/users/dwivediyeeshu")
  .then(res => res.json())
  .then(data => console.log(data.login))
  .catch(err => console.error(err));

console.log("Request sent...");

