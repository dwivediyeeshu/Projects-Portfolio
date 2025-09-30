function sayMyName(){

    console.log("Y");
    console.log("E");
    console.log("E");
    console.log("S");
    console.log("H");
    console.log("U");
    
}

// sayMyName()   - function call

// function addTwoNumbers(numbers1, numbers2){
//     console.log(numbers1 + numbers2);
    
// }

//addTwoNumbers();    // NaN as parameters are not given

function addTwoNumbers(numbers1, numbers2){
    let result = numbers1 + numbers2
    return result
    
}

const result = addTwoNumbers(3,4)

console.log("Result: ", result);

function loginUserMessage(username){

    if(username === undefined){
        console.log("Please enter a username");
        return 

    }
    return `${username} just logged in`
}

console.log(loginUserMessage());  // undefined as value is not given

console.log(loginUserMessage("yeeshu"));


function calculateCartPrice(...num1) {

    return num1
    
}

console.log(calculateCartPrice(200, 400, 500, 600, 1000));

const user = {
    username: "Yeeshu",
    price: 399
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({
    username: "John Cena",
    price: 499
})

// type safety is important.

const myNewArray = [100, 200, 400, 600]

function returnSeconValue(getArray) {

    return getArray[1]
    
}

console.log(returnSeconValue(myNewArray));
