const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer'];

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

// é possível nesses termos a seguit, que simplifica a syntax

for (let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`)
}

// ---- o for abaixo poderia ser refeito de uma forma
// bem melhor com o for of

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

for (let char of "hello world") {
    console.log(char)
}