let round = 0;
let playerLives = 5;
let computerLives = 5;
let prevSelectionP = "";
let prevSelectionC = "";

const buttons = document.querySelectorAll('button');
const roundText = document.querySelector('#round-text');
const playerLivesText = document.querySelector('#player-lives');
const computerLivesText = document.querySelector('#computer-lives');
const playerImage = document.querySelector('#player-selection');
const computerImage = document.querySelector('#computer-selection');
const roundStatus = document.querySelector('#round-status');

const gameEnded = document.querySelector('.game-ended');

const winner = document.createElement('div');
winner.classList.add("footer");

const refresh = document.createElement('button');
refresh.classList.add("refresh");
refresh.textContent = ("Try Again");

refresh.addEventListener('click', () => {
    location.reload();
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    });
});

function updateDisplay(playerSelection,computerSelection){

    roundText.textContent = ("Round: " + round);
    playerLivesText.textContent = ("Man: " + playerLives);
    computerLivesText.textContent = ("Machine: " + computerLives);
    
    computerImage.classList.remove("computer-scissors-img","computer-paper-img","computer-rock-img");
    playerImage.classList.remove("player-scissors-img","player-paper-img","player-rock-img");

    if(playerSelection == "R"){
        playerImage.classList.add("player-rock-img");
    }
    else if(playerSelection == "P"){
        playerImage.classList.add("player-paper-img");
    }
    else{
        playerImage.classList.add("player-scissors-img");
    }

    if(computerSelection == "R"){
        computerImage.classList.add("computer-rock-img");
    }
    else if(computerSelection == "P"){
        computerImage.classList.add("computer-paper-img");
    }
    else{
        computerImage.classList.add("computer-scissors-img");
    }

    if(result(playerSelection,computerSelection) == "W"){
        roundStatus.textContent = ("You won the round!")
    }
    else if(result(playerSelection,computerSelection) == "L"){
        roundStatus.textContent = ("You lost this round.")
    }
    else{
        roundStatus.textContent = ("This round is a tie.")
    }

}

function checkWin(){
    if(playerLives == 0 || computerLives == 0){
        updateDisplay = function(){return};
        playRound = function(){return};
    }

    if(playerLives == 0){
        winner.textContent = ("You have lost, humanity is defeated.");
        gameEnded.appendChild(winner);
        gameEnded.appendChild(refresh);
    }
    else if(computerLives == 0){
        winner.textContent = ("You won! You saved the world!");
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

function result(playerSelection,computerSelection){ 
    if(playerSelection == "R" && computerSelection == "S"){
        return "W";
    }
    else if(playerSelection == "P" && computerSelection == "R"){
        return "W";
    }
    else if(playerSelection == "S" && computerSelection == "P"){
        return "W";
    }
    else if(playerSelection == computerSelection){
        return "T";
    }
    else{
        return "L";
    }
}   