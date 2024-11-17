let bgContainer = document.getElementById("bgContainer");
let heading = document.getElementById("heading");
let themeUserInput = document.getElementById("themeUserInput");

themeUserInput.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        const value = themeUserInput.value.trim();
        if (value === 'Light') {
            bgContainer.style.backgroundImage = 'url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png")';

            console.log('Light mode selected');
        } else if (value === 'Dark') {
            bgContainer.style.backgroundImage = 'url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png")';
            heading.style.color = "white";
        } else {
            alert("Enter the valid theme");
        }
        themeUserInput.value = '';
    }
})