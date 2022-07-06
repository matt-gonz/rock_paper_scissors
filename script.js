let playerScore = 0;
let computerScore = 0;

const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');
const gameOverMsg = document.getElementById('gameOverMsg');
const resetBtn = document.getElementById('resetBtn');
const gameOverModal = document.getElementById('gameOverModal');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');

rockBtn.addEventListener('click', () => handleClick('Rock'));
paperBtn.addEventListener('click', () => handleClick('Paper'));
scissorsBtn.addEventListener('click', () => handleClick('Scissors'));
resetBtn.addEventListener('click', resetGame);

function handleClick(playerSelection){
    if (isGameOver()){
        return;
    }

    playRound(playerSelection);

    if (isGameOver()){
        setFinalMessage();
        toggleGameOverModal();
    }    
}

// CPU outputs rock, paper, or scissors
function computerPlay(){
    let cpuSelection = Math.floor((Math.random() * 3) + 1);
    if (cpuSelection === 1){
        cpuSelection = "Rock";
    }
    else if (cpuSelection === 2){
        cpuSelection = "Paper";
    }
    else{
        cpuSelection = "Scissors";
    }

    return cpuSelection;
}

function playRound(playerSelection){
    let computerSelection = computerPlay();
    let outcome = null;
    let winner = null;

    if (playerSelection === computerSelection){
        winner = "draw";
        outcome = "It's a draw!";

    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")){
            winner = "player";
            outcome = "You win!";
            playerScore += 1;
    }
    else{
        winner = "computer";
        outcome = "You lose...";
        computerScore += 1;
    }

    scoreInfo.textContent = outcome;
    updateSigns(playerSelection, computerSelection);
    updateScoreMessage(winner, playerSelection, computerSelection);
    updateScoreDisplay();
    
    return;
}

function updateSigns(playerSelection, computerSelection){
    switch (playerSelection){
        case 'Rock':
            playerSign.textContent = '✊';
            break;
        case 'Paper':
            playerSign.textContent = '✋';
            break;
        case 'Scissors':
            playerSign.textContent = '✌';
            break;
    }

    switch (computerSelection){
        case 'Rock':
            computerSign.textContent = '✊';
            break;
        case 'Paper':
            computerSign.textContent = '✋';
            break;
        case 'Scissors':
            computerSign.textContent = '✌';
            break;
    }
}

function updateScoreDisplay(){
    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
}

function updateScoreMessage(winner, playerSelection, computerSelection){
    let message = null;
    if (winner === 'player'){
        message = `${playerSelection} beats ${computerSelection}`;
    }
    else if (winner === 'computer'){
        message = `${playerSelection} loses to ${computerSelection}`;
    }
    else{
        message = `${playerSelection} ties with ${computerSelection}`;
    }

    scoreMessage.textContent = message;
}

function capitalizeFirstChar(myString){
    if (myString !== null && myString !== ""){
        myString = myString.charAt(0).toUpperCase() + myString.toLowerCase().slice(1);
    }

    return myString;
}

function isGameOver(){
    return playerScore === 5 || computerScore === 5;
}

function setFinalMessage(){
    if (playerScore > computerScore){
        gameOverMsg.textContent = "You won!";
    }
    else{
        gameOverMsg.textContent = "You lost...";
    }
}

function toggleGameOverModal(){
    gameOverModal.classList.toggle('active');
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    scoreInfo.textContent = 'Choose your weapon';
    scoreMessage.textContent = 'First to 5 points wins';
    playerScorePara.textContent = 'Player: 0';
    computerScorePara.textContent = 'Computer: 0';
    playerSign.textContent = '❔';
    computerSign.textContent = '❔';
    gameOverModal.classList.remove('active'); 
}