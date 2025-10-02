// for Loop

for (let index = 0; index < 10; index++) {
  const element = index;
  if (element == 5) {
    console.log("5 is Best Number");
  }
  console.log(element);
}

// for (let i = 0; i <= 10; i++) {
//   console.log(`Outer loop Value : ${i}`);

//   for (let j = 0; j <= 10; j++) {
//     console.log(`Inner loop value ${j} and inner loop ${i}`);
//   }
// }

/*for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop Value : ${i}`);
    
   for (let j = 0; j <= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i  + '*' + j + '=' + i*j );
    
   }
    
}
   */

let myArray = ["Flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
        
}

// break and continue statement -------------------------------

for (let i = 1; i <=20 ; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        break;
        
    }
    console.log(`Value of i is ${i}`);
    
}

for (let i = 1; i <=20 ; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue;
        
    }
    console.log(`Value of i is ${i}`);
    
}







