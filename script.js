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
function game(playerSelection, computerSelection) {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper, or Scissors?", "Rock");
        let computerSelection = computerPlay();
        outcome = playRound(playerSelection, computerSelection);
        console.log("Round " + String(i+1) + ": " + outcome);
        if (outcome === "win"){
            playerScore++;
        }
        else if (outcome === "lose"){
            computerScore++;
        }
    }
    if (playerScore === computerScore){
        console.log("It's a draw!");
    }
    else if (playerScore > computerScore){
        console.log("Player wins!");
    }
    else{
        console.log("CPU wins!")
    }
}


// Helper function(s)
function capitalizeFirstChar(myString){
    return myString.charAt(0).toUpperCase() + myString.toLowerCase().slice(1);
}

const playerSelection = "rock";
const computerSelection = computerPlay();
// console.log("computer selection", computerSelection);
// console.log(playRound(playerSelection, computerSelection));
game(playerSelection, computerSelection);