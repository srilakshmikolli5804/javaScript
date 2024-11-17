let skillList = [{
    skillName: "HTML",
    uniqueNo: 1,
},
{
    skillName: "CSS",
    uniqueNo: 2,
},
{
    skillName: "JavaScript",
    uniqueNo: 3,
}
];


let todoItemsContainer = document.getElementById("skillsContainer");
let h1 = document.createElement("h1");
h1.textContent = "Mark your Skills";
todoItemsContainer.appendChild(h1);

let ul = document.createElement("ul");
todoItemsContainer.appendChild(ul);

function createAndAppendSkill(skill) {

    let checkboxId = "checkbox" + skill.uniqueNo;
    let labelId = "label" + skill.uniqueNo;
    let Name = skill.skillName;

    let li = document.createElement("li");
    li.classList.add("d-flex", "flex-row");
    ul.appendChild(li);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = checkboxId;
    li.appendChild(checkbox);

    let label = document.createElement("label");
    label.setAttribute("for", checkboxId);
    label.id = labelId;
    label.textContent = Name;
    checkbox.classList.toggle("color");
    label.classList.add("checkbox-label");
    li.appendChild(label);

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            label.classList.add('color');
        } else {
            label.classList.remove('color');
        }
});
}

for (let skill of skillList) {
createAndAppendSkill(skill);
}