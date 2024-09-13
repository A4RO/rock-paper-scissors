function getComputerChoice() {
    random = Math.random();
    if (random <= 1/3) {
        return "rock";
    }
    else if (random > 1/3 && random <= 2/3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock")
        return "computer";
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock")
        return "human";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors")
        return "human";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors")
        return "computer";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat Paper")
        return "computer";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper")
        return "human";
    }
    else if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    }
}

function playGame() {
    let humanScore = 0, computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();
        roundResult = playRound(humanSelection, computerSelection);
        if (roundResult === "human") {
            humanScore++;
        }
        else if (roundResult === "computer") {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log("You won the game!");
    }
    else if (humanScore < computerScore) {
        console.log("You lost the game!");
    }
    else {
        console.log("The game is a tie!");
    }
}

playGame();