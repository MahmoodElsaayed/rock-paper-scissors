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

// display the winner and players' choices after each (round)
function displayRoundWinner(playerWin, playerChoice, computerChoice) {
    if (playerWin) {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    } else if (playerWin === null) {
        console.log(`It's a tie!`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    }
}

// display the winner after the entire (game)
function displayGameWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("The winner of the game is: Player1!!!");
    } else if (playerScore === computerScore) {
        console.log("it's a tie!");
    } else {
        console.log("The winner of the game is: CPU1!!!");
    }
}

// start a round of the game
function startRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let playerWin = checkPlayerWin(playerChoice, computerChoice);
    updateScores(playerWin);
    displayRoundWinner(playerWin, playerChoice, computerChoice);
}