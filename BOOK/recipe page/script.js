let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let heading = document.getElementById('heading');
let image = document.getElementById('image');
let unordered = document.getElementById('unorderedList');

heading.textContent = 'Tomato Pasta';
image.setAttribute('src', recipeObj.imgSrc);
for (let i = 0; i < recipeObj['ingredients'].length; i++) {
    let li = document.createElement('li');
    li.textContent = recipeObj['ingredients'][i];
    li.classList.add('list');
    unordered.appendChild(li);
}