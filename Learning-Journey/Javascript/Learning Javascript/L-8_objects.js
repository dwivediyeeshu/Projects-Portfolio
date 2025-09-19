// singleton
// Object.create 

// object literals

const mySym = Symbol("keys")

const JsUser = {
    name: "Yeeshu",
    "full name": "Yeeshu Dwivedi",
    [mySym] : "keys1",
    age: 22,
    location: "Prayag",
    email: "yeeshu@anime.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Sunday"]

}

console.log(JsUser.name);
console.log(JsUser["name"]);            //another way to call a key values from object
console.log(JsUser["full name"]);
console.log(JsUser[mySym])

// to change value -------

JsUser.location = "Kanpur"

//Object.freeze(JsUser);                // used to freeze or not allow any changes to a particular object
JsUser.location = "USA"

console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting);        // undefined when object is freezed or else [Function (anonymous)] we will get

console.log(JsUser.greeting());    // we will get  error if the object is freezed

console.log(JsUser.greetingTwo());


