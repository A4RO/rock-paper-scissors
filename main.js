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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        resultsText.textContent = ("You lose! Paper beats Rock");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        resultsText.textContent = ("You win! Paper beats Rock");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        resultsText.textContent = ("You win! Rock beats Scissors");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        resultsText.textContent = ("You lose! Rock beats Scissors");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        resultsText.textContent = ("You lose! Scissors beat Paper");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        resultsText.textContent = ("You win! Scissors beat Paper");
        humanScore++;
    }
    else if (humanChoice === computerChoice) {
        resultsText.textContent = ("It's a tie!")
    }
}

rockButton = document.createElement("button");
paperButton = document.createElement("button");
scissorsButton = document.createElement("button");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

container = document.querySelector("#container");
container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

let computerChoice = getComputerChoice();

let computerScore = 0;
let humanScore = 0;

resultsDiv = document.createElement("div");
resultsText = document.createElement("p");
container.appendChild(resultsDiv);
resultsDiv.appendChild(resultsText);
resultsScore = document.createElement("p")
resultsScore.textContent = "You: 0 - Computer: 0"
resultsDiv.appendChild(resultsScore);

container.addEventListener("click", function(e) {
    switch(e.target.innerText) {
        case("Rock"):
            playRound("rock", computerChoice);
            break;
            
        case("Paper"):
            playRound("paper", computerChoice);
            break;
            
        case("Scissors"):
            playRound("scissors", computerChoice);
            break;
    }
    computerChoice = getComputerChoice();
    resultsScore.textContent = `You: ${humanScore} - Computer: ${computerScore}`
    if(humanScore === 5 || computerScore === 5) {
        finalText = document.createElement("p");
        switch(humanScore > computerScore) {
            case(true):
                container.remove();
                finalText.textContent = `You won ${humanScore} - ${computerScore}!`;
                finalText.style = "color: green";
                break;
            case(false):
                container.remove();
                finalText.textContent = `You lost ${humanScore} - ${computerScore}!`;
                finalText.style = "color: red";
                break;
        }
        body = document.querySelector("body");
        body.appendChild(finalText);
    }
})