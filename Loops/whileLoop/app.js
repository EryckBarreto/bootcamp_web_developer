// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }

// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if(input.toLowerCase() === "stop copying me") break;
//     }
// }

// console.log("OK YOU WIN!")

let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1
let attempts = 1;

let guess = prompt("Enter your first guess! (Type 'q' to quit the game.");
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
    }
}

console.log(`YOU GOT IT! It took you ${attempts} guesses.`)