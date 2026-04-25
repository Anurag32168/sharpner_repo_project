//console.log("hello");
// Write your code below:
//adding heading 
const heading = document.getElementById("main-heading");
heading.textContent = "Fruit World";

heading.style.color = 'orange';

const headerDiv = document.getElementById("header");
headerDiv.style.backgroundColor = 'green';

headerDiv.style.borderBottom = "5px solid orange";

const basketHeading = document.getElementById("basket-heading");

basketHeading.style.color = "green";

const thanksDiv = document.getElementById("thanks");
const para = document.createElement("p");
para.textContent = "Please visit us again";
thanksDiv.appendChild(para);