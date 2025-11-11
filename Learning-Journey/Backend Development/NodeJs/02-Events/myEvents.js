const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

// eventEmitter.on("greet", () => {
//   console.log("Hello and welcome to events in Node js");
// });

//create event listener
eventEmitter.on("greet", (username) => {
  console.log(`Hello ${username} and Welcome to the Events in Node js.`);
});
eventEmitter.on("greet", (username) => {
  console.log(`Hola Amigo ${username} Kaise ho theek ho.`);
});

eventEmitter.once("pushnotify", () => {
  console.log("This event will run only once");
}); // only to use once

// Emit the Event

// eventEmitter.emit('greet'); // to emit or use the event
// to add data in the event emitter

eventEmitter.emit("greet", "Yeeshu");
eventEmitter.emit("greet", "John");
eventEmitter.emit("pushnotify"); // this event will run only once as Once was used.
eventEmitter.emit("pushnotify"); // this will not run.
eventEmitter.emit("greet", "Cena");

const myListener = () => console.log("I am a test listener");
eventEmitter.on("test", myListener);
eventEmitter.emit("test");
eventEmitter.emit("test");
eventEmitter.removeListener("test", myListener);

eventEmitter.emit("test");  // this will not work as we have removed the event listener

// console.log(eventEmitter);
console.log(eventEmitter.listeners("greet"));
console.log(eventEmitter.listeners("test"));  // as we have removed event on

