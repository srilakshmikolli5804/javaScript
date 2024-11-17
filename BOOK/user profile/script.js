let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "KOLLI SRI LAKSHMI",
    age: 25
};

let container = document.getElementById("profileContainer");


let div = document.createElement("div", "d-flex", "flex-column", "justify-content-center");
div.setAttribute("id", "small");
container.appendChild(div);

container = document.getElementById("small");


let img = document.createElement("img");
img.setAttribute("src", profileDetails["imgSrc"]);
img.classList.add("image");
container.appendChild(img);

let h1 = document.createElement("h1");
h1.textContent = profileDetails.name;
h1.classList.add("heading");
container.appendChild(h1);

let p = document.createElement("p");
p.textContent = "Age : " + profileDetails.age;
p.classList.add("paragraph");
container.appendChild(p);