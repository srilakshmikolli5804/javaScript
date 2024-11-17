let imageElement = document.getElementById("image");
let originalImageWidth = "200px";
let image = document.getElementById("imageWidth");
imageElement.style.width = originalImageWidth;
let warning = "Can't Visiable ,please increase the size";

function decrement() {
    originalImageWidth = parseInt(originalImageWidth);
    if (originalImageWidth > 100) {
        originalImageWidth = originalImageWidth - 5;
        imageElement.style.width = originalImageWidth + "px";
        image.textContent = originalImageWidth + "px";
        document.getElementById("warningMessage").textContent = "";
    } else {
        document.getElementById("warningMessage").textContent = warning;
    }

}

function increment() {
    originalImageWidth = parseInt(originalImageWidth);
    if (originalImageWidth < 300) {
        originalImageWidth = originalImageWidth + 5;
        imageElement.style.width = originalImageWidth + "px";
        image.textContent = originalImageWidth + "px";
        document.getElementById("warningMessage").textContent = "";
    } else {

        document.getElementById("warningMessage").textContent = "Too Big,Decrease the size of the Image";
    }
}