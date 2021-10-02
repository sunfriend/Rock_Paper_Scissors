function playerSelection(sel) {
    let userSel = sel.slice().substring(0 , 1).toLowerCase();
    if (userSel == "r") {
        return 0;
    }
    else if (userSel == "p") {
        return 1;
    }
    return 2;
}

function computerSelection() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerPlay, computerPlay) {  
    let userValue = playerPlay;
    let arr = ["Rock", "Paper", "Scissors"];
    if (playerPlay == computerPlay) {
        console.log(`${arr[playerPlay]} : ${arr[computerPlay]} = Draw`);
        return 0;
    }
    else if ((userValue+1) == computerPlay) {
        console.log(`${arr[playerPlay]} : ${arr[computerPlay]} = Computer Won a round`);
        return -1;
    }
    else if (computerPlay === 0 && playerPlay === 2) {
        console.log(`${arr[playerPlay]} : ${arr[computerPlay]} = Computer Won a round`);
        return -1;
    }
    else {
        console.log(`${arr[playerPlay]} : ${arr[computerPlay]} = player Won a round`);
        return 1;
    }
}

function game() {
    let i = 0;
    let score = 0;
    do {
        let userChoice = prompt("Please type (Rock, Paper or Scissors):");
        score += playRound(playerSelection(userChoice), computerSelection());
        i++;
    } while (i <= 5 );
    if (score > 0) {
        alert("Player won the game");
    }
    else if (score < 0) {
        alert("Computer won the game");
    }
    else {
        alert("It\'s a Draw");
    }
}

game();
