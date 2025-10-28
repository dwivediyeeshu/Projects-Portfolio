function outer() {
    let counter = 4
    return function() {
        counter++
        return counter
    }
}

let increment = outer()
console.log(increment());
console.log(increment());
console.log(increment());


/*
When JavaScript executes a function:

* It creates a lexical environment (a memory where variables live).

* The inner function keeps a reference to the outer function’s environment.

* That’s why variables from the outer function remain alive as long as the inner function exists.

*/

//Real World uses -

// Data Privacy (Encapsulation):

function createBankAccount() {
  let balance = 1000;

  return {
    deposit(amount) { balance += amount; },
    withdraw(amount) { balance -= amount; },
    getBalance() { return balance; }
  };
}

const account = createBankAccount();
account.deposit(500);
console.log(account.getBalance()); // 1500
// balance can't be directly accessed — it's private


//2. Event Handlers & Callbacks:

function setupButton() {
  let clicks = 0;
  document.getElementById("btn").addEventListener("click", function() {
    clicks++;
    console.log(`Clicked ${clicks} times`);
  });
}

setupButton();


// 3. Function Factories:

function multiplyBy(n) {
  return function(x) {
    return x * n;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10

// Closures capture variables by reference, not by value.
// That means if the variable changes, the closure sees the updated value — not a snapshot.