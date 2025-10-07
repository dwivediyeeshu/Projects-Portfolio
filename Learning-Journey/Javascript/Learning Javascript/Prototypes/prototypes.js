let computer = { cpu: 12 };
let lenovo = {
  screen: "UHD",
  __proto__: computer,
};
let tomHardware = {};

//console.log(`computer `, computer.__proto__);    //computer  [Object: null prototype] {} no properties present

console.log(`lenovo `, lenovo.__proto__); //lenovo  { cpu: 12 } injected the custom properties

let genericCar = {
  tyres: 4,
};

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(`tesla `, tesla); //tesla  { driver: 'AI' }

console.log(`tesla `, Object.getPrototypeOf(tesla)); //tesla  { tyres: 4 }

console.log(`genericCar `, genericCar); //genericCar  { tyres: 4 }

const object = {};
object.foo = 42;

console.log(object.hasOwnProperty("foo"));
// Expected output: true

console.log(object.hasOwnProperty("toString"));
// Expected output: false

console.log(object.hasOwnProperty("hasOwnProperty"));
// Expected output: false
