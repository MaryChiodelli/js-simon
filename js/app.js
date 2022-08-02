const numbers = [];
const userGuess = [];
while (numbers.length < 5) {
    const number = getRandomNumber();
    if (!numbers.includes(number)) {
        numbers.push(number);
    }
}

alert(numbers.join(', '));

setTimeout(() => {
    for (let i = 0; i < 5; i++) {
        const number = parseInt(prompt('Inserisci un numero.'));
        userGuess.push(number);
    }
    console.log(userGuess);
}, 10000);

console.log(numbers);

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}