// prompt and validate the player's input
function getPlayerChoice() {
    while (true) {
        let playerChoice = prompt("Pick: rock, paper, or scissors?");
        if (
            playerChoice &&
            ["rock", "paper", "scissors"].includes(playerChoice.toLowerCase())
        ) {
            return playerChoice.toLowerCase();
        }
    }
}

// get a random choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomValidIndex = Math.floor(Math.random() * choices.length);
    return choices[randomValidIndex];
}

// check if player won based on the both choices
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

// update the scores based on the round's outcome
function updateScores(playerWin) {
    if (playerWin != null) {
        playerWin ? playerScore++ : computerScore++; 
    }
}

// display the winner and players' choices after each round
function displayRoundWinner(playerWin, playerChoice, computerChoice) {
    if (playerWin) {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    } else if (playerWin === null) {
        console.log(`It's a tie!`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    }
}

// display the winner of the entire game based on both scores
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

// initialize the game score counters
let playerScore = 0;
let computerScore = 0;

// start multiple rounds of the game and display winner
function startGame() {
    for (let roundsLeft = 5; roundsLeft > 0; roundsLeft--) {
        startRound();
    }
    displayGameWinner(playerScore, computerScore); 
}
