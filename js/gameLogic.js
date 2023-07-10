// get a validated player choice
function getPlayerChoice() {
    let playerChoice;
    do {
        playerChoice = prompt("What's you choice? ").toLowerCase();
    }
    while (!["rock", "paper", "scissors"].includes(playerChoice));
    return playerChoice;
}

// get a random computer choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomValidIndex = Math.floor(Math.random() * choices.length);
    return choices[randomValidIndex];
}

// check if player won
function checkPlayerWin(playerChoice, computerChoice) {
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        return true;
    } else if (playerChoice === computerChoice) {
        return null;
    } else {
        return false;
    }
}

// update the scores
function updateScores(playerWin) {
    if (playerWin != null) {
        playerWin ? playerScore++ : computerScore++; 
    }
}



