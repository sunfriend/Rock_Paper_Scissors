const buttons = document.querySelectorAll("button");

buttons.forEach(btn => btn.addEventListener("click", playerSelection));

function playerSelection(e) {
    console.log(buttons);
}