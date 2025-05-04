const choices = document.querySelectorAll('.choice');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const result = document.getElementById('result');

let playerPoints = 0;
let computerPoints = 0;

const getComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const getWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return 'draw';
    }

    const winningConditions = {
        'rock': 'scissors',     // rock beats scissors
        'paper': 'rock',        // paper beats rock
        'scissors': 'paper'     // scissors beats paper
    };

    if (winningConditions[playerChoice] === computerChoice) {
        return 'player';
    }

    return 'computer';
};

const updateScore = (winner) => {
    if (winner === 'player') {
        playerPoints++;
        playerScore.textContent = playerPoints;
    } else if (winner === 'computer') {
        computerPoints++;
        computerScore.textContent = computerPoints;
    }
};

const displayResult = (winner, playerChoice, computerChoice) => {
    result.className = winner;
    
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    playerChoice = capitalize(playerChoice);
    computerChoice = capitalize(computerChoice);

    if (winner === 'draw') {
        result.textContent = `It's a Draw! Both chose ${playerChoice}`;
    } else if (winner === 'player') {
        result.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    } else {
        result.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.dataset.choice;
        const computerChoice = getComputerChoice();
        const winner = getWinner(playerChoice, computerChoice);
        
        updateScore(winner);
        displayResult(winner, playerChoice, computerChoice);
    });
});