let button_id = document.getElementById("convertBtn");
button_id.addEventListener("click", function() {
    let hours = document.getElementById("hoursInput");
    let minutes = document.getElementById("minutesInput");
    let error_msg = document.getElementById("errorMsg");
    let time_in_seconds = document.getElementById("timeInSeconds");
    let hours_int, minutes_int;

    hours_int = parseInt(hours.value);
    minutes_int = parseInt(minutes.value);
    console.log(hours_int);

    if (hours_int > 0 & minutes_int > 0) {
        error_msg.textContent = "";
        time_in_seconds.textContent = hours_int * 3600 + minutes_int * 60 + "s";
        time_in_seconds.classList.add("timeSeconds");
    } else if (isNaN(hours_int) || hours_int < 0) {
        error_msg.textContent = "Please enter a valid number of hours";
        error_msg.style.color = "#fff";
        time_in_seconds.textContent = "";
        time_in_seconds.classList.remove("timeSeconds");
    } else if (isNaN(minutes_int) || minutes_int < 0) {
        error_msg.textContent = "Please enter a valid number of minutes";
        error_msg.style.color = "#fff";
        time_in_seconds.textContent = "";
        time_in_seconds.classList.remove("timeSeconds");
    }
});
