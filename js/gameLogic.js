  // Get references to all the interactive elements
  const buttons = document.querySelectorAll(".btn");
  const playerChoiceDisplay = document.querySelector(".player-side .choice-screen img");
  const computerChoiceDisplay = document.querySelector(".computer-side .choice-screen img");
  const playerScoreDisplay = document.querySelector(".player-side .score-counter");
  const computerScoreDisplay = document.querySelector(".computer-side .score-counter");
  const roundWinnerDisplay = document.querySelector(".round-winner-text");
  const popupModal = document.querySelector("#popup");
  const gameWinnerText = document.querySelector("#game-winner-text");
  const playAgainButton = document.querySelector("#play-again-button");

  // Initialize the game score counters
  let playerScore = 0;
  let computerScore = 0;

  // Get a random choice
  function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomValidIndex = Math.floor(Math.random() * choices.length);
    return choices[randomValidIndex];
  }

  // Updates the images of the choice screens according to the picks of both sides
  function updateChoiceScreens(playerChoice, computerChoice) {
    playerChoiceDisplay.setAttribute("src", `./assets/${playerChoice}.png`);
    computerChoiceDisplay.setAttribute("src", `./assets/flipped_${computerChoice}.png`);
  }

  // Check if player won based on both choices
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

  // Update the scores and scores display based on the round's outcome
  function updateScores(playerWin) {
    if (playerWin != null) {
      if (playerWin) {
        playerScore++;
        playerScoreDisplay.textContent = `Score: ${playerScore}`;
      } else {
        computerScore++;
        computerScoreDisplay.textContent = `Score: ${computerScore}`;
      }
    }
  }

  // Display the winner and players' choices after each round
  function displayRoundWinner(playerWin, playerChoice, computerChoice) {
    if (playerWin) {
      roundWinnerDisplay.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    } else if (playerWin === null) {
      roundWinnerDisplay.textContent = `It's a tie!`;
    } else {
      roundWinnerDisplay.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    }
  }

  // Print the game winner when a player reaches 5 points
  function printGameWinner() {
    if (playerScore === 5) {
      gameWinnerText.textContent = "You won!";
    } else {
      gameWinnerText.textContent = "You lost...";
    }
  }

  // Start a round of the game
  function startRound(e) {
    let playerChoice = e.currentTarget.classList[0];
    let computerChoice = getComputerChoice();
    updateChoiceScreens(playerChoice, computerChoice);
    let playerWin = checkPlayerWin(playerChoice, computerChoice);
    updateScores(playerWin);
    displayRoundWinner(playerWin, playerChoice, computerChoice);

    // Check if the game has ended (one player reached 5 points)
    if (playerScore >= 5 || computerScore >= 5) {
      printGameWinner();
      popupModal.show();

      // Remove click event listeners to prevent further rounds after game over
      buttons.forEach((btn) => {
        btn.removeEventListener("click", startRound);
      });
    }
  }

  // Event listener to refresh the page and start a new game
  playAgainButton.addEventListener("click", () => {
    window.location.reload();
  });

  // Add event listeners to buttons to get the player's choice and start the round
  buttons.forEach((btn) => {
    btn.addEventListener("click", startRound);
  });