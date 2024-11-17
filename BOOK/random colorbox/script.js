let background = document.getElementById("bgContainer");

function random() {
    let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

    let k = bgColorsArray[Math.floor(Math.random() * bgColorsArray.length)];
    background.style.backgroundColor = k;
    console.log(k);
}