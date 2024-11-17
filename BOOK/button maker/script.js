let button = document.getElementById("customButton");



function generation() {
    let bgcolor = document.getElementById("bgColorInput").value;
    let fontcolor = document.getElementById("fontColorInput").value;
    let fontsize = document.getElementById("fontSizeInput").value;
    let fontweight = document.getElementById("fontWeightInput").value;
    let padding = document.getElementById("paddingInput").value;
    let border = document.getElementById("borderRadiusInput").value;


    button.style.backgroundColor = bgcolor;
    button.style.color = fontcolor;
    button.style.fontSize = fontsize;
    button.style.fontWeight = fontweight;
    button.style.padding = padding;
    button.style.borderRadius = border;

}