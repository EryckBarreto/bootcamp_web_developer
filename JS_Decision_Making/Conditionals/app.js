// console.log("Before conditional")
// let random = Math.random();
// if (random < 0.5) {
//     console.log("Congrats! Your number is less than 0.5")
//     console.log(random);
// }
// if (random >= 0.5) {
//     console.log("Congrats! Your number is greater than 0.5!")
//     console.log(random);
// }

// const dayOfWeek = "Friday";

// if (dayOfWeek === "Monday") {
//     console.log("UGHH I hate mondays!")
// } else if (dayOfWeek === "Saturday") {
//     console.log("Yaaaay I LUV saturdays!")
// } else if (dayOfWeek === "Friday") {
//     console.log("Friday is a good day")
// }

// const age = 66;

// if (age < 5) {
//     console.log("You are a baby. You get in for free")
// } else if (age < 10) {
//     console.log ("You are a child. You pay $10")
// } else if (age < 65) {
//     console.log("You are a adult. You pay $20")
// } else {
//     console.log("You are a senior. You pay $10")
// }

// const password = prompt("Please enter a new password: ");

// // Password must be 6+ characters
// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid Password")
//     } else {
//         console.log("Password cannot contain spaces!")
//     }

// } else {
//     console.log("Password too short! Must be 6+ characters")
// }
// Password cannot include space

//  SWITCH STATEMENT

const day = 8;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Invalid number")
}