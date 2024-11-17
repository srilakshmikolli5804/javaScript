let msg = document.getElementById("msg");
let saveBtn = document.getElementById("saveBtn");
let clearBtn = document.getElementById("clearBtn");
let storageKey = "userInput";

saveBtn.addEventListener("click", function() {
    // Retrieve the current message input value
    let currentMessage = msg.value.trim();

    if (currentMessage !== "") {
        // Save the message to local storage
        localStorage.setItem(storageKey, currentMessage);
        alert("Message saved to local storage!");
    } else {
        alert("Please enter a message to save.");
    }
});
clearBtn.addEventListener("click", function() {
    // Remove the message from local storage
    localStorage.removeItem(storageKey);
    // Clear the message input field
    msg.value = "";
    alert("Local storage cleared and message input reset.");
});