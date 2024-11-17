let main = document.getElementById("movieReviewsContainer");
let button = document.getElementById("addBtn");

button.onclick = function() {
    let title = document.getElementById("titleInput").value;
    let review = document.getElementById("reviewTextarea").value;

    if (title === "") {
        alert("Enter Movie Title");
    } else if (review === "") {
        alert("Enter Reviw of the Movie");
    } else {

        let div = document.getElementById("reviewsContainer");
        //  let div = document.createElement("div");
        let h = document.createElement("h1");
        let p = document.createElement("p");

        //   div.classList.add("newContainer");
        // div.id="reviewsContainer";
        main.appendChild(div);

        h.textContent = "Movie Title : " + title;
        h.classList.add("heading");
        div.appendChild(h);

        p.textContent = "Review : " + review;
        p.classList.add("paragraph");
        div.appendChild(p);

        title = "";
        review = "";

    }
};