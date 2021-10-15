const buttons = document.querySelectorAll("button");
const playerChoice = document.querySelector("#player-selection");
const resultOutput = document.querySelector("#round-result")
const computerChoice = document.querySelector("#computer-selection");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score")
const audioClick = document.querySelector("#audio-click");

let [playerScoreCounter, computerScoreCounter, roundsCounter] = [0, 0, 0];
const choiceSelector = [{name: "rock", beats: "scissors"},
                        {name: "paper", beats: "rock"},
                        {name: "scissors", beats: "paper"}];

buttons.forEach(btn => btn.addEventListener("click", function (e) {
    let result = playRound(playerSelection(e), computerSelection());
    drawResults(result);
    checkWinner();
}));


function playerSelection(e) {
    return choiceSelector.filter(obj => obj.name === e.target.id);
}

function computerSelection() {
    return choiceSelector[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {
    if(audioClick) {
        audioClick.currentTime = 0;
        audioClick.play();
}
    playerChoice.value = player[0].name;
    computerChoice.value = computer.name;
    playerChoice.style.setProperty("text-decoration", "none"); 
    computerChoice.style.setProperty("text-decoration", "none"); 

    if (computer.name === player[0].name) {
        resultOutput.value = "It's a draw!"; 
        return 0;
    }
    else if (computer.beats === player[0].name) {
        resultOutput.value = "Player lost a round";  
        playerChoice.style.setProperty("text-decoration", "line-through"); 
        return -1;
    }
    else if (player[0].beats === computer.name) {
        resultOutput.value = "Player won a round!";
        computerChoice.style.setProperty("text-decoration", "line-through");
        return 1;
    }
}

function drawResults(result) { 
    let element = document.createElement("p");
    if (result > 0) {
        const textNode = document.createTextNode("|");
        element.appendChild(textNode);
        playerScoreDisplay.appendChild(element);
        playerScoreCounter++;
        playerScoreDisplay.querySelector("span").innerText = playerScoreCounter;
    }
    else if (result < 0) {
        const textNode = document.createTextNode("|");
        element.appendChild(textNode);
        computerScoreDisplay.appendChild(element);
        computerScoreCounter++;
        computerScoreDisplay.querySelector("span").innerText = computerScoreCounter;
    }
   /*  else {
        const textNode = document.createTextNode("0");
        element.appendChild(textNode);
        let parCopy = element.cloneNode(true);
        computerScoreDisplay.appendChild(element);
        playerScoreDisplay.appendChild(parCopy);
    } */
}

function checkWinner(rounds = 5) {
     if (computerScoreCounter >= rounds) { 
       alert("Computer won the game!");
       location.reload();
    }
    else if (playerScoreCounter >= rounds) {
        alert("Player won the game");
        location.reload();
    }
}