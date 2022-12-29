// the computer choses rock paper or scissor
const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice;
}

// the user inputs their choice

function checkWinner(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        return "Tie";
    }
    else if(
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "rock")
    ) {
        return "player";
    }
    else{
        return "Computer";
    }
}



function playRound(playerChoice, computerChoice){
    const result = checkWinner(playerChoice, computerChoice);
    if(result == 'Tie'){
        return 'it\'s a tie'
    }
    else if(result == 'player'){
        return `Player Wins! ${playerChoice} beats ${computerChoice}`
    }
    else{
        return `computer wins! ${computerChoice} beats ${playerChoice}`
    }
}

const playerChoice = "Rock";
const computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome")
    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        console.log("------")
        if(checkWinner(playerChoice, computerChoice)){
            scorePlayer++;      
        }
        else if(checkWinner(playerChoice, computerChoice)){
            scoreComputer++
        }

    }
    console.log("game over")
    if(scorePlayer > scoreComputer){
        console.log("player was the winner");
    }
    else if(scorePlayer < scoreComputer){
        console.log("computer is the winner");
    }
    else{
        console.log("we have a tie");
    }
}

game()

// computer determines the winner using a loop or something

// the determination of the winner is presented to the user

// +1 is added to the score of whoever the winner was for the previous game

// the game starts over with the new score present