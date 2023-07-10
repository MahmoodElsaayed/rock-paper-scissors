// get validated player choice
function getPlayerChoice() {
    let playerChoice;
    do {
        playerChoice = prompt("What's you choice? ").toLowerCase();
    }
    while (!["rock", "paper", "scissors"].includes(playerChoice));
    return playerChoice;
}


// get computer's random choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomValidIndex = Math.floor(Math.random() * choices.length);
    return choices[randomValidIndex];
}


