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

function capitalizeFirstChar(myString){
    return myString.charAt(0).toUpperCase() + myString.toLowerCase().slice(1);
}

// Play a five round game that keeps score
// and reports a winner/loser at the end.
function game(playerSelection, computerSelection) {

}

// User inputs rock, paper, or scissors
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log("computer selection", computerSelection);
console.log(playRound(playerSelection, computerSelection));