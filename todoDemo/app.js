
let input = prompt("What would like to do?");
let todos = [];

while (input !== "quit" && input !== "q") {

    if (input === "add") {
        let addTodo = prompt("What do you like to add?")
        todos.push(addTodo);

    } else if (input === "list") {
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }

    } else if (input === "delete") {
        let deleteTodo = prompt("What item would you like to delete? Insert the number.");
        
        if(deleteTodo >= 0 && delete Todo < todos.length) {
            todos.splice(deleteTodo, 1);
        } else {
            console.log("Invalid input. Please provide a valid index.");
        }

    }

    input = prompt("What would you like to do?");
}
