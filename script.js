/* 
This is a classic ROCK, PAPER, and SCISSORS GAME

RULES:
    - First to 5 wins
    - First round starts and will ask the player to enter a move
    - Invalid moves include wrong or empty string and hitting cancel on the prompt window
    - Invalid moves causes the game to reset 
    - A winner is declared after 5 wins
*/


const selection = ["ROCK","PAPER","SCISSORS"];
//const computerSelection = getComputerChoice();

//Randomly return 'rock', 'paper', or 'scissors'
function getComputerChoice() {
    let result = Math.floor(Math.random()*3);
    return selection[result];
}
    

//console.log(getComputerChoice());
function playRound(playerSelection,computerSelection){
    let player = playerSelection.trim().toUpperCase();
    if (player === computerSelection) {
        console.log("Draw! CPU picked " + computerSelection);
        return "DRAW";
    }
    else if (player === 'ROCK' && computerSelection === 'PAPER') {
        console.log("You Lose! CPU picked " + computerSelection);
        return "CPU";
        
    }
    else if (player === 'ROCK' && computerSelection === 'SCISSORS') {
        console.log("You Win! CPU picked " + computerSelection);
        return "YOU";
        
    }
    else if (player === 'PAPER' && computerSelection === 'SCISSORS') {
        console.log("You Lose! CPU picked " + computerSelection);
        return "CPU";
        
    }
    else if (player === 'PAPER' && computerSelection === 'ROCK') {
        console.log("You Win! CPU picked " + computerSelection);
        return "YOU";
        
    }
    else if (player === 'SCISSORS' && computerSelection === 'ROCK') {
        console.log("You Lose! CPU picked " + computerSelection);
        return "CPU";
        
    }
    else if (player === 'SCISSORS' && computerSelection === 'PAPER') {
        console.log("You WIN! CPU picked " + computerSelection);
        return "YOU";
        
    }
    // This will exit out of the game completely
    else {
        return alert("Invalid Move. Enter Rock, Paper, or Scissors. The game will now exit");
    }
}

function game(){
    //Create score tracker
    let youScore = 0;
    let cpuScore = 0;

    //Start the game and play 5 times
    for (let i=1; i<6; i++) {
        //Set round 1 and ask for player to initiate move
        playerSelection = prompt("ROUND: "+i+"  Please enter your move");
        
        //if player hits the cancel button or sends an empty string
        if (playerSelection === null) {
            i=1;
            youScore = 0;
            cpuScore = 0;
            return console.log("Invalid Move. Enter Rock, Paper, or Scissors. The game will now exit");
        }
        else {
            let score = playRound(playerSelection, getComputerChoice());
            if (score === "CPU") {
                cpuScore++;
            }
            else if (score === "YOU") {
                youScore++;
            }
             else if (score === "DRAW"){
            }
            else {
                // do nothing
                return;
            }
        }
    }

    //Verify score after the loop
        if (cpuScore > youScore) {
            alert("CPU has won the match!  "+cpuScore+"-"+youScore);
        }
        else if (cpuScore < youScore) {
            alert("You have won the match!  "+youScore+"-"+cpuScore);
        }
        else if (cpuScore === youScore) {
            alert("The match is a draw!  "+youScore+"-"+cpuScore);
        }
        else {
            return;
        }
}


// Run the game
game();


