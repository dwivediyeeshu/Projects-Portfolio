const user = {
  username: "Yeeshu",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`); // this is used for current context
    console.log(this); // provides the context
  },
};

user.welcomeMessage();
user.username = "John";
user.welcomeMessage();

console.log(this); //{} - empty as there is no global context
// - in browser we will get data specific to browser as there is window object.

function chai() {
  let username = "Yeeshu";
  console.log(this.username);
}

chai(); // undefined as it will not print usernam

const chai2 = () => {
  let username = "Yeeshu";
  console.log(this);
};

chai2();

// Arrow function

// () => {} // or

// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2
// }

// implicit function declaration

// const addTwo = (num1, num2) => num1 + num2

// Important -
//If curly braces used we need to write the return statement

//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Yeeshu"})

console.log(addTwo(3,4));

