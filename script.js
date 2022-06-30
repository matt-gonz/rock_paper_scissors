// CPU outputs rock, paper, or scissors
function computerPlay(){
    cpuSelection = Math.floor((Math.random() * 3) + 1);
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
    playerSelection = capitalizeFirstChar(playerSelection);
    isValidated = validateInput(playerSelection);

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

// Play a five round game that keeps score
// and reports a winner/loser at the end.
function game() {
    playerScore = 0;
    computerScore = 0;
    whoWon = null;
    for (let i = 0; i < 5; i++){
        let playerSelection = playerSelect();
        let computerSelection = computerPlay();
        outcome = playRound(playerSelection, computerSelection);
        if (outcome === "win"){
            playerScore++;
            whoWon = "Player";
        }
        else if (outcome === "lose"){
            computerScore++;
            whoWon = "Computer"
        }
        else{
            whoWon = "Tie"
        }
        console.log("Round: " + String(i+1) + "\n"
            + "Player Chose: " + playerSelection + "\n"
            + "Computer Chose: " + computerSelection + "\n"
            + whoWon + " won the round");
    }
    if (playerScore === computerScore){
        results = "It's a draw!";
    }
    else if (playerScore > computerScore){
        results = "Player wins!";
    }
    else{
        results = "CPU wins!";
    }
    console.log("Results: " + results);
}

// Prompts user selection
function playerSelect(){
    playerSelection = promptPlayerSelection();
    playerSelection = capitalizeFirstChar(playerSelection);
    validatedPlayerSelection = validateInput(playerSelection); 
    
    return validatedPlayerSelection;
}

// Helper function(s)
function promptPlayerSelection(message="Type Rock, Paper, or Scissors"){
    playerSelection = prompt(message, "Rock");
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


game();