function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs);
}

// não conseguimos acessar a variável dentro da função
// em razão do escopo da função, a variável está dentro
// da função

let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = "Hiii!"
}

// console.log(radius);
// console.log(PI);

// /\ block scope, variável não acessa

// lexical scope

function bankRobbery() {
    const heroes = ["Spiderman", "Wolverine", "Black Panther"];
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
        }
    }
    cryForHelp();
}