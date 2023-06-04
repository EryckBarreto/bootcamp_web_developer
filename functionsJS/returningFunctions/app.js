function makeMysteryFunc() {
    const rand = Math.random();
    if(rand > 0.5){
        return function() {
            console.log("Congrats! I'm a good function");
            console.log("You won a million dollars!!")
        }
    } else {
        return function() {
            alert("You've been infected by a computer virus!")
            alert("Stop trying to close this window!!")
            alert("Stop trying to close this window!!")
            alert("Stop trying to close this window!!")
            alert("Stop trying to close this window!!")
            alert("Stop trying to close this window!!")
        }
    }
}

const mystery = makeMysteryFunc();

function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0,18);
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);


function isBetween(num) {
    return num >= 50 && num <= 100
}

function isBetween2(num) {
    return num >= 1 && num <= 10
}