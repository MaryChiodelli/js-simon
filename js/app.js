const numbers = [];
const userGuess = [];
const bodyEl = document.querySelector('body');

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
        if (numbers.includes(number)) {
            userGuess.push(number);
        }
    }
    console.log(userGuess);
    bodyEl.innerHTML = `<p>Hai indovinato ${userGuess.length} numeri: ${userGuess.join(', ')}</p>`;
}, 30000);

console.log(numbers);

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}