function getComputerChoice() {
    let randomOneToThree = Math.floor((Math.random() * 3) + 1);
    switch (randomOneToThree) {
        case 1:
            return("Paper");
        case 2:
            return("Rock");
        case 3:
            return("Scissors");
      }
}

function getPlayerChoice() {
    let playerChoice = prompt("Do you choose rock, paper or scissors? If you choose anything different, it will be randomly assigned!");
    let filteredChoice = playerChoice.toLowerCase();
    switch (filteredChoice) {
        case "paper":
            return("Paper");
        case "rock":
            return("Rock");
        case "scissors":
            return("Scissors");
        default:
            let randomOneToThree = Math.floor((Math.random() * 3) + 1);
            switch (randomOneToThree) {
                case 1:
                    return("Paper");
                case 2:
                    return("Rock");
                case 3:
                    return("Scissors");
              }
      }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return("You both chose " + playerSelection + ". Draw!");
    } else if ((playerSelection == "Rock") && (computerSelection == "Paper")) {
        return("Computer chose paper. Computer wins!");
    } else if ((playerSelection == "Rock") && (computerSelection == "Scissors")) {
        return("Computer chose scissors. Player wins!");
    } else if ((playerSelection == "Paper") && (computerSelection == "Rock")) {
        return("Computer chose rock. Player wins!");
    } else if ((playerSelection == "Paper") && (computerSelection == "Scissors")) {
        return("Computer chose scissors. Computer wins!");
    } else if ((playerSelection == "Scissors") && (computerSelection == "Rock")) {
        return("Computer chose rock. Computer wins!");
    } else if ((playerSelection == "Scissors") && (computerSelection == "Paper")) {
        return("Computer chose paper. Player wins!");
    }
}

function game() {
    for (i=0; i<=4; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
}