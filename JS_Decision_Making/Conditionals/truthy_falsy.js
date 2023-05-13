const userInput = prompt("Enter something: ")
if (userInput) {
    console.log("Truthy!")
} else {
    console.log("Falsy!")
}

// false, 0, empty string, null, undefined, NaN
// they are all falsy values
// everything else if truthy!