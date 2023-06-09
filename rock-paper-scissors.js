function getComputerChoice(){
    let temp = Math.floor(Math.random() * 3) + 1;
    if(temp == 1){
        return "rock";
    }
    else if(temp == 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == "rock" && computerSelection == "scissors"){
        return "Win";
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        return "Win";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "Win";
    }
    else if(playerSelection == computerSelection){
        return "Tie";
    }
    else{
        return "Lose";
    }
}

function game(){
    let counter = 0;
    let playerWins = 0
    let computerWins = 0;
    let playerSelection = ''
    let computerSelection = ''
    let result = '';
    console.log("This is a game first to three wins!");

    while(true){

        if(playerWins == 3){
            console.log("\nYou won.")
            return;
        }
        else if(computerWins == 3){
            console.log("\nYou lost.")
            return;
        }

        playerSelection = prompt("Enter Rock, Paper, or Scissors: ");
        computerSelection = getComputerChoice();
        result = playRound(playerSelection,computerSelection);

        if(result == "Win"){
            counter++;
            playerWins++;
            console.log("Round",counter,"you won the round.",
            "You chose:", playerSelection+".", "The computer chose:",computerSelection+".",
            "Current score: Player:",playerWins,"Computer:",computerWins,);
        }
        else if(result == "Lose"){
            counter++;
            computerWins++;
            console.log("Round",counter,"you lost the round.",
            "You chose:", playerSelection+".", "The computer chose:",computerSelection+".",
            "Current score: Player: ",playerWins,"Computer: ",computerWins,);
        }
        else if(result == "Tie"){
            counter++;
            console.log("Round",counter,"this round was a tie.",
            "You chose:", playerSelection+".", "The computer chose:",computerSelection+".",
            "Current score: Player:",playerWins,"Computer:",computerWins,);
        }
    }
}

game();

