const accountId = 12345;
let accountEmail = "john@cena.com"
var accountPassword = "1234"
accountCity = "Prayagraj"

// accountId = 2 // not allowed as Constant keyword

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity])

/* 
    prefer not to use
    var because of issue in block scope and functional scope
*/

accountEmail = "steve@austin.com"
accountPassword = "12345677"
accountCity = "Jaipur"
var accountStatus; // it will show undefined in output as value is not provided.

console.table([accountId, accountEmail, accountPassword, accountCity, accountStatus])
console.log(typeof(accountEmail));

let str = "Hello"
let str2 = "World"

console.log(str,str2)
console.log(`Str 1 and Str 2 have value ${str} ${str2}`) // use back tick. another way to print 2 variables together