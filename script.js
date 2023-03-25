let computerChoiceDisplay = document.getElementById('computer-choice');
let userChoiceDisplay = document.getElementById('user-choice');
let resultDisplay = document.getElementById('result');
let possibleChoices = document.querySelectorAll('button');
// resultDisplay.innerHTML = "nitin"

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    console.log(userChoice);
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissor'];
    computerChoice = choices[randomNumber];
    computerChoiceDisplay.innerHTML = computerChoice;
}
const getResult = () => {
    if (computerChoice === userChoice) {
        resultDisplay.innerHTML = "Draw";
    }
    else if (computerChoice === 'rock' && userChoice === 'scissor') {
        resultDisplay.innerHTML = "You Loose!";
    }
    else if (computerChoice === 'rock' && userChoice === 'paper') {
        resultDisplay.innerHTML = "You Win!";
    }
    else if (computerChoice === 'paper' && userChoice === 'scissor') {
        resultDisplay.innerHTML = "You Win!";
    }
    else if (computerChoice === 'paper' && userChoice === 'rock') {
        resultDisplay.innerHTML = "You Loose!";
    }
    else if (computerChoice === 'scissor' && userChoice === 'rock') {
        resultDisplay.innerHTML = "You Win!";
    }
    else if (computerChoice === 'scissor' && userChoice === 'paper') {
        resultDisplay.innerHTML = "You Loose!";
    }
}