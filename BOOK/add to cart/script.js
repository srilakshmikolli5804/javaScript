let input = document.getElementById('cartItemTextInput');
let ul = document.getElementById('unordered');

function itemsAdded() {
    if (input.value !== '') {
        let li = document.createElement('li');
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = '';
    }
}