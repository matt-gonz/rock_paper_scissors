let playerScore = 0;
let computerScore = 0;

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

function playRound(playerSelection, computerSelection){
    // game variations
    let outcome = null;

    if (playerSelection === computerSelection){
        outcome = "draw";
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")){
            outcome = "win";
    }
    else{
        outcome = "lose";
    }

    return outcome;
}

// Prompts user selection
function playerSelect(){
    let playerSelection = promptPlayerSelection();
    playerSelection = capitalizeFirstChar(playerSelection);
    let validatedPlayerSelection = validateInput(playerSelection); 
    
    return validatedPlayerSelection;
}

// Helper function(s)
function promptPlayerSelection(message="Type Rock, Paper, or Scissors"){
    let playerSelection = prompt(message, "Rock");
    return playerSelection;
}

function capitalizeFirstChar(myString){
    if (myString !== null && myString !== ""){
        myString = myString.charAt(0).toUpperCase() + myString.toLowerCase().slice(1);
    }

    return myString;
}

// Validates user input
function validateInput(userInput){
    while (userInput !== "Rock" && userInput !== "Paper" && userInput !== "Scissors"){
        userInput = promptPlayerSelection(message="Try again:\nType Rock, Paper, or Scissors");
    }

    return userInput;
}

document.addEventListener('click', function (e){
    const playerChoice = e.target.textContent;
    const computerChoice = computerPlay();
    const resultChoices = document.querySelector('.result-choices');
    resultChoices.textContent = `Player chose: ${playerChoice} | 
        CPU chose: ${computerChoice}`;
    const outcome = playRound(playerChoice, computerChoice);
    let roundOutcomeMsg = null;
    if (outcome === "draw"){
        roundOutcomeMsg = "It's a draw!";
    }
    else if (outcome === "win"){
        roundOutcomeMsg = "Player wins!";
        playerScore += 1;
    }
    else{
        roundOutcomeMsg = "CPU wins!";
        computerScore += 1;
    }

    const scoreBoard = document.querySelector('.result-scoreBoard');
    scoreBoard.textContent = `Player score: ${playerScore} | 
        CPU score: ${computerScore}`;

    const roundOutcome = document.querySelector('.result-roundOutcome');
    roundOutcome.textContent = `Round Outcome: ${roundOutcomeMsg}`;

    const overallOutcome = document.createElement('h2');
    overallOutcome.classList.add('result-overallOutcome');
    overallOutcome.textContent = roundOutcomeMsg;

    const container = document.querySelector('.container');
    if (playerScore === 5 || computerScore === 5){
        container.appendChild(overallOutcome);
    }
});