let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';
console.log(JSON.parse(greeting));
let parsing = JSON.parse(greeting);
let {
    from,
    greetText,
    to
} = parsing;

let fromEl = document.getElementById("from");
let toEl = document.getElementById("to");
let text = document.getElementById("text");

fromEl.textContent = "from : " + from;
toEl.textContent = "To : " + to;
text.textContent = greetText;