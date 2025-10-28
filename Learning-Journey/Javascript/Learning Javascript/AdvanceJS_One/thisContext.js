const person = {
    name: "Yeeshu",
    greet(){
        console.log(`Hi, I am ${this.name}`);
        
    },
};

person.greet();

const greetFunction = person.greet
greetFunction()

const boundGreet = person.greet.bind({name: "John"});
boundGreet();


// bind, call and apply

// call -

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const user = { name: "Yeeshu" };

greet.call(user, "Hello", "!");
// Output: Hello, Yeeshu!


/*
Invokes the function immediately with a specified this value.

You pass arguments one by one.
*/

// Apply

greet.apply(user, ["Hi", "!!"]);
// Output: Hi, Yeeshu!!

/*

Very similar to call(), but you pass arguments as an array.
Also invokes immediately.

*/

const greetUser = greet.bind(user, "Hey");
greetUser("!!!");
// Output: Hey, Yeeshu!!!

/*
Returns a new function with this permanently bound.
Does not execute immediately — you can call it later.

*/