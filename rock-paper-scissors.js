let round = 0;
let playerLives = 5;
let computerLives = 5;

const buttons = document.querySelectorAll('button');
const roundText = document.querySelector('#round-text');
const playerLivesText = document.querySelector('#player-lives');
const computerLivesText = document.querySelector('#computer-lives');
const playerImage = document.querySelector('#player-selection');
const computerImage = document.querySelector('#computer-selection');

const gameEnded = document.querySelector('.game-ended');
const winner = document.createElement('div');
const refresh = document.createElement('button');
refresh.textContent = ("Try Again");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    });
});

function updateDisplay(playerSelection,computerSelection){
    roundText.textContent = ("Round: " + round);
    playerLivesText.textContent = ("Man: " + playerLives);
    computerLivesText.textContent = ("Machine: " + computerLives);
    //todo: add image changing with classes.
    //todo: add text saying what happened last round
}

function checkWin(){
    if(playerLives == 0 || computerLives == 0){
        updateDisplay = function(){return};
        playRound = function(){return};
    }

    if(playerLives == 0){
        winner.textContent = ("You have lost, humanity is defeated.")
        gameEnded.appendChild(winner);
        gameEnded.appendChild(refresh);
    }
    else if(computerLives == 0){
        winner.textContent = ("You won! You saved the world!")
        gameEnded.appendChild(winner);
        gameEnded.appendChild(refresh);
    }
}

function getComputerChoice(){
    let temp = Math.floor(Math.random() * 3) + 1;
    if(temp == 1){
        return "R";
    }
    else if(temp == 2){
        return "P";
    }
    else{
        return "S";
    }
}

function playRound(playerSelection,computerSelection){
    if(playerSelection == "R" && computerSelection == "S"){
        computerLives--;
        round++;
    }
    else if(playerSelection == "P" && computerSelection == "R"){
        computerLives--;
        round++;
    }
    else if(playerSelection == "S" && computerSelection == "P"){
        computerLives--;
        round++;
    }
    else if(playerSelection == computerSelection){
        round++;
    }
    else{
        playerLives--;
        round++;
    }
    updateDisplay(playerSelection,computerSelection);
    checkWin();
}