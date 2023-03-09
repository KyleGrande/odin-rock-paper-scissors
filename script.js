console.log('Hello from script.js')

function getComputerChoice() {
    // Generate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(computerChoice, userChoice) {

    if (userChoice === computerChoice) {
        return ('It is a tie!');
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return ('You lose!');
        } else {
            return ('You win!');
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return ('You lose!');
        } else {
            return ('You win!');
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return ('You lose!');
        } else {
            return ('You win!');
        }
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let userChoice = prompt('Enter your choice: rock, paper, or scissors');
        userChoice = userChoice.toLowerCase()
        let computerChoice = getComputerChoice();
        console.log(userChoice);
        console.log(computerChoice);
        if (playRound(computerChoice, userChoice) === 'You win!') {
            console.log('You win!');
            userScore++;
        } else if (playRound(computerChoice, userChoice) === 'You lose!') {
            console.log('You lose!');
            computerScore++;
        } else {
            console.log('It is a tie!');
        }

    }
    if (userScore > computerScore) {
        console.log('You win the game!');
    } else if (userScore < computerScore) {
        console.log('You lose the game!');
    } else {
        console.log('It is a tie!');
    }
}