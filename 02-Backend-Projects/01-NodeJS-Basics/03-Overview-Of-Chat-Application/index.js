const ChatRoom = require("./chatRoom.js");

const chat = new ChatRoom();

chat.on("join", (user) => {
  console.log(`${user} has joined the chat`);
});
chat.on("message", (user, msg) => {
  console.log(`${user} : ${msg}`);
});
chat.on("leave", (user) => {
  console.log(`${user} has left the chat`);
});

// simulating the chat

chat.join('Alice')
chat.join('Bob')

chat.sendMessage('Alice', 'Hey Bob, Hello To Everyone');
chat.sendMessage('Bob', 'Hey Alice, Hello To Everyone');

chat.leave('Alice')
chat.sendMessage('Alice', "this message wont be sent")
chat.leave('Bob')