// get validated player choice
function getPlayerChoice() {
    let playerChoice;
    do {
        playerChoice = prompt("What's you choice? ").toLowerCase();
    }
    while (!["rock", "paper", "scissors"].includes(playerChoice));
    return playerChoice;
}