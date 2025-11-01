let input = prompt("What would you like to do?");
const tasks = [];
const exitCommands = ["quit", "QUIT", "Quit", "q", "Q"];

while (!exitCommands.includes(input)) {
  if (input === "list") {
    if (tasks.length === 0) {
      console.log("🗒️ Your todo list is empty!");
    } else {
      console.log("*********************");
      tasks.forEach((task, index) => {
        console.log(`${index}: ${task}`);
      });
      console.log("*********************");
    }
  }

  else if (input === "new") {
    const newToDo = prompt("Enter new todo:").trim();
    if (newToDo.length === 0) {
      console.log("⚠️ Todo cannot be empty. Please try again.");
    } else {
      tasks.push(newToDo);
      console.log(`✅ "${newToDo}" added to the list.`);
    }
  }

  else if (input === "delete") {
    if (tasks.length === 0) {
      console.log("❌ Your todo list is empty. Nothing to delete!");
    } else {
      const indexInput = prompt("Enter the index of the todo to delete:");
      const index = parseInt(indexInput);

      if (Number.isNaN(index)) {
        console.log("⚠️ Invalid input. Please enter a valid number.");
      } else if (index < 0 || index >= tasks.length) {
        console.log("⚠️ Index out of range. Try again.");
      } else {
        const deleted = tasks.splice(index, 1);
        console.log(`🗑️ Deleted "${deleted[0]}" from the list.`);
      }
    }
  }

  else if (input.trim() === "") {
    console.log("⚠️ Please enter a command.");
  }

  else {
    console.log("❓ Unknown command. Use 'new', 'list', 'delete', or 'quit'.");
  }

  input = prompt("What would you like to do?");
}

console.log("👋 OK, you quit the app!");
