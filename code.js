const startButton = document.querySelector('.startButton');
const description = document.querySelector('.description h2');
const tentativeTag = document.querySelector('.tentatives h2');
const submittingButton = document.querySelector('.submittion');
const inputField = document.querySelector('.inputted');
const resultatDuChoix = document.querySelector('.resultat h2');
const restartButton = document.querySelector('.restart');

const divDescription = document.querySelector('.description');
const divInput = document.querySelector('.inputField');
const divTentatives = document.querySelector('.tentatives');
let difficulty = document.querySelector('.selecting_difficulty');

const beforeGame = document.querySelector('.beforeGame');
const inGame = document.querySelector('.inGame');

const gifWon = document.querySelector('.giffy.won');
const gifLost = document.querySelector('.giffy.lost');


let numberToGuess = 0;
let tentative = 10;
let yourGuess = -1;


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function startingGame() {
    beforeGame.style.display = 'none';
    inGame.style.display = 'block';
}

function endingGame() {
    divDescription.style.display = 'none';
    inputField.style.display = 'none';
    submittingButton.style.display = 'none';
    divTentatives.style.display = 'none';
}

function restartingGame() {
    beforeGame.style.display = 'block';
    inGame.style.display = 'none';
    resultatDuChoix.style.color = 'red';
    resultatDuChoix.textContent = '--Ecrire un nombre--';
    divDescription.style.display = 'flex';
    inputField.style.display = 'flex';
    submittingButton.style.display = 'flex';
    divTentatives.style.display = 'flex';
    gifLost.style.display = 'none';
    gifWon.style.display = 'none';
}


startButton.addEventListener('click', () => {
    difficulty = document.querySelector('.selecting_difficulty');
    choix = difficulty.value;
    let minimum = getRandomInt(1, 100) * 10;
    if (choix === 'easy') {
        startingGame();
        tentative = 10;
        description.textContent = `intervalle du jeu [${minimum},${minimum + 20}]`;
        numberToGuess = getRandomInt(minimum, minimum + 20);
        tentativeTag.textContent = `tentatives restantes: ${tentative}`
    }
    if (choix === 'medium') {
        startingGame();
        tentative = 7;
        description.textContent = `intervalle du jeu [${minimum},${minimum + 50}]`;
        numberToGuess = getRandomInt(minimum, minimum + 50);
        tentativeTag.textContent = `tentatives restantes: ${tentative}`
    }
    if (choix === 'hard') {
        startingGame();
        tentative = 5;
        description.textContent = `intervalle du jeu [${minimum},${minimum + 100}]`;
        numberToGuess = getRandomInt(minimum, minimum + 100);
        tentativeTag.textContent = `tentatives restantes: ${tentative}`
    }
})



submittingButton.addEventListener('click', () => {
    console.log("the number that you are trying to guess: " + numberToGuess);
    const inputValue = inputField.value;
    if (inputValue !== "") {
        yourGuess = Number(inputValue);
        inputField.value = '';
        tentative--;
        tentativeTag.textContent = `tentatives restantes: ${tentative}`
        if (yourGuess > numberToGuess) {
            resultatDuChoix.textContent = `THE NUMBER IS LOWER THAN ${yourGuess}`;
        }
        if (yourGuess < numberToGuess) {
            resultatDuChoix.textContent = `THE NUMBER IS BIGGER THAN ${yourGuess}`;
        }
        if (yourGuess === numberToGuess) {
            resultatDuChoix.textContent = `🎉🎉YOU WON🎉🎉`;
            resultatDuChoix.style.color = 'green';
            gifWon.style.display = "flex";
            endingGame();
        }
        if (tentative === 0 && !(yourGuess === numberToGuess)) {
            resultatDuChoix.textContent = `😔😔You lost😔😔`;
            gifLost.style.display = "flex";
            endingGame();
        }
    }
})


restartButton.addEventListener('click', restartingGame);