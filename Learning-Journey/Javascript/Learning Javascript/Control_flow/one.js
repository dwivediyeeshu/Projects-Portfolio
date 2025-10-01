// if -statement

const isUserloggedIn = true;
const temperature = 41;

if (isUserloggedIn == true) {
  console.log("User is logged in");
} else {
  console.log("Please Log In");
}

if (temperature > 50) {
  console.log("Greater than 50");
} else if (temperature == 50) {
  console.log("equal to 50");
} else {
  console.log(`Temperature is ${temperature}`);
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
    
}

if(loggedInFromGoogle || loggedInFromEmail)
{
    console.log("User logged in");
    
}
