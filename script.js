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

function checkIfEnded(gameResults) {

    if (computerCounter == 5) {
        computerCounter = 0;
        humanCounter = 0;
        container.innerHTML = ''
        playerScoreContainer.innerHTML = '0'
        computerScoreContainer.innerHTML = '0'
        resultContainer.textContent = gameResults.textContent + ' | Final score: PC wins!'
    } else if (humanCounter == 5) {
        computerCounter = 0;
        humanCounter = 0;
        container.innerHTML = ''
        playerScoreContainer.innerHTML = '0'
        computerScoreContainer.innerHTML = '0'
        resultContainer.textContent = gameResults.textContent + ' | Final score: Player wins!'
    }

}

function updateResults(resultText) {
    let computerResult = resultText.includes("Computer wins!");
    if (computerResult) {
        computerCounter++;
        computerScoreContainer.textContent = computerCounter;
    }

    let humanResult = resultText.includes("Player wins!");
    if (humanResult) {
        humanCounter++;
        playerScoreContainer.textContent = humanCounter;
    }
}

function clearBeforeStart() {
    if ((humanCounter == 0) && (computerCounter == 0)) {
        resultContainer.textContent = '';
    }
}

const container = document.querySelector('.container');
const playerScoreContainer = document.querySelector('.playerScore');
const computerScoreContainer = document.querySelector('.computerScore');
const resultContainer = document.querySelector('.gameResult');

computerCounter = 0;
humanCounter = 0;

const chooseRock = document.querySelector('#chooseRock');
chooseRock.addEventListener('click', () => {
    const gameResults = document.createElement('div');
    gameResults.textContent = playRound("Rock", getComputerChoice());
    clearBeforeStart();
    updateResults(gameResults.textContent);
    container.appendChild(gameResults);
    checkIfEnded(gameResults);

});

const choosePaper = document.querySelector('#choosePaper');
choosePaper.addEventListener('click', () => {
    const gameResults = document.createElement('div');
    gameResults.textContent = playRound("Paper", getComputerChoice());
    clearBeforeStart();
    updateResults(gameResults.textContent);
    container.appendChild(gameResults);
    checkIfEnded(gameResults);
    
});

const chooseScissors = document.querySelector('#chooseScissors');
chooseScissors.addEventListener('click', () => {
    const gameResults = document.createElement('div');
    gameResults.textContent = playRound("Scissors", getComputerChoice());
    clearBeforeStart();
    updateResults(gameResults.textContent);
    container.appendChild(gameResults);
    checkIfEnded(gameResults);
    
});


