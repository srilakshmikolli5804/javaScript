let Game = document.getElementById("gameResult");
let restart = document.getElementById("restartButton");
let check = document.getElementById("checkButton");
let first = document.getElementById("firstNumber");
let second = document.getElementById("secondNumber");
let answer = document.getElementById("userInput");
let random1 = Math.ceil(Math.random() * 100);
let random2 = Math.ceil(Math.random() * 100);
let warning = random1 + random2;
first.textContent = random1;
second.textContent = random2;

function rButton() {
    answer.textContent = " ";
    let random1 = Math.ceil(Math.random() * 100);
    let random2 = Math.ceil(Math.random() * 100);
    first.textContent = random1;
    second.textContent = random2;
    Game.textContent = "";
    Game.style.backgroundColor = "#ffffff";
    warning = random1 + random2;
    answer.value = "";
}

function cButton() {
    let value = parseInt(answer.value);

    if (warning === value) {
        Game.textContent = "Congrulations! you got it right.";
        Game.style.backgroundColor = "#028a0f";
    } else {
        Game.textContent = "Please try again!";
        Game.style.backgroundColor = "#1e217c";
    }

    answer.textContent = " ";
}