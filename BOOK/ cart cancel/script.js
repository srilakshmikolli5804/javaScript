let container = document.getElementById('orderedItemsContainer');
let h1 = document.createElement("h1");
h1.textContent = "Your Ordered Items";
container.appendChild(h1);

let ul = document.createElement("ul");
container.appendChild(ul);




let orderList = [{
        text: "Veg Biriyani",
        uniqueNo: 1
    },
    {
        text: "Chicken 65",
        uniqueNo: 2
    },
    {
        text: "Paratha",
        uniqueNo: 3
    }
];

function createOrder(order) {
    let name = order.text;
    let itemId = "item" + order.uniqueNo;
    let buttonId = "button" + order.uniqueNo;


    let li = document.createElement("li");
    li.classList.add("d-flex", "flex-row");
    li.id = itemId;
    ul.appendChild(li);

    let p = document.createElement("p");
    p.textContent = name;
    li.appendChild(p);

    let button = document.createElement("button");
    button.classList.add("button");
    button.id = buttonId;
    button.textContent = "Cancel";
    li.appendChild(button);


    button.addEventListener("click", () => {
        // Remove the parent div from the ul
        ul.removeChild(li);
    });

}


for (let order of orderList) {
    createOrder(order);
}