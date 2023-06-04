function singSong(){
    console.log("Do")
    console.log("Re")
    console.log("Mi")
}

// singSong();

function greet(firstName, lastName) {
    // console.log("Hi!")
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

greet("George", "Clooney");

function repeat(str, numTimes) {
    let result = ""; 
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

repeat("hi", 5);

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

add(10,8);