let aboutEl = document.getElementById("aboutTab");
let timeEl = document.getElementById("timeToVisitTab");
let attractionsEl = document.getElementById("attractionsTab");

function about() {
    timeEl.classList.add("d-none");
    attractionsEl.classList.add("d-none");
    aboutEl.classList.remove("d-none");
}

function timetovisit() {
    aboutEl.classList.add("d-none");
    attractionsEl.classList.add("d-none");
    timeEl.classList.remove("d-none");
}

function Attractions() {
    aboutEl.classList.add("d-none");
    attractionsEl.classList.remove("d-none");
    timeEl.classList.add("d-none");
}