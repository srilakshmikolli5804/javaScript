let from = document.getElementById("fromUserInput");
let to = document.getElementById("toUserInput");
let msg = document.getElementById("counterText");
let start = document.getElementById("startBtn");

start.onclick = function() {
    if (from.value === "") {
        alert("Enter From Value");
        return;
    }
    if (to.value === "") {
        alert("Enter To Value");
        return;
    }
    let startingValue = parseInt(from.value, 10);
    let endValue = parseInt(to.value, 10);
    if (startingValue >= endValue) {
        msg.textContent = startingValue;
        return;
    }
    let uniqueId = setInterval(function() {
        if (startingValue < endValue) {
            msg.textContent = startingValue;
            startingValue++;
        } else {
            msg.textContent = endValue;
            clearInterval(uniqueId);
        }
    }, 1000);
}