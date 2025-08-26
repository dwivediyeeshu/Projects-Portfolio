// Comparison Operator -

console.log(2 > 1);    // True
console.log(2 >= 1);   // True
console.log(2 < 1);    // False
console.log(2 == 1);   // False
console.log(2 != 1);   // True


console.log("2" > 1);    // True    Automatically converts to Number
console.log("02" > 1);   // True

console.log(null > 0);    // False
console.log(null == 0);   // False
console.log(null >= 0);   // True

/* Note - The reason is that an equality check == and comparisons > < >= <= works differently.
          Comparison convert null to a number, treating it as 0.
          Thats why (3) null >= 0 is true and (1) null > 0 is false.
*/