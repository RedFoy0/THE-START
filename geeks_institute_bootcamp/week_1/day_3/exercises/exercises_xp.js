// ===== Exercise 1 =====

// ----------- Change the article -------------
let firstH = document.getElementsByTagName("h1")[0];
console.log(firstH);

let Article = document.getElementsByTagName("article")[0];
let lastpara = Article.lastElementChild;
Article.removeChild(lastpara);

let secondH = document.getElementsByTagName("h2")[0];
secondH.addEventListener("click", changeColor);
function changeColor() {
  secondH.style.backgroundColor = "red";
}

let thirdH = document.getElementsByTagName("h3")[0];
thirdH.addEventListener("click", hide);
function hide() {
  thirdH.style.display = "none";
}

let btn = document.createElement("button");
btn.textContent = "bold";
let body = document.getElementsByTagName("body")[0];
body.appendChild(btn);

document.addEventListener("click", bold);
function bold() {
  let paragraphs = document.querySelectorAll("p");

  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontWeight = "bold";
  }
}

// bonus 1

let randomNum = Math.floor(Math.random() * 100);

firstH.addEventListener("mouseover", changeFontSize);
function changeFontSize() {
  firstH.style.fontSize = randomNum + "px";
}

console.log(randomNum);

// bonus 2

// ===== Exercise 2 =====

// ----------- Work with forms -------------

// Retrieve the form and console.log it.

let form = document.forms[0];
console.log(form);

// Retrieve the inputs by their id and console.log them.

let input1 = document.getElementById("fname");
console.log(input1);

let input2 = document.getElementById("lname");
console.log(input2);

let input3 = document.getElementById("submit");
console.log(input3);

// Retrieve the inputs by their name attribute and console.log them.

let Input1 = document.getElementsByName("firstname")[0];
console.log(Input1);

let Input2 = document.getElementsByName("lastname")[0];
console.log(Input2);

input3.name = "Submit";
let Input3 = document.getElementsByName("Submit")[0];
console.log(Input3);

// When the user submits the form (ie. submit event listener)

form.addEventListener("submit", getUserInfo);

function getUserInfo(e) {
  e.preventDefault(); // force the page to do not refresh

  let inputValue1 = input1.value;
  let inputValue2 = input2.value;

  if (inputValue1 === "") {
    showError(input1, " First name is required");

    console.log("First name is required");
    return;
  } else {
    let list = document.createElement("li");
    list.textContent = "the first name is : " + inputValue1;
    lists.appendChild(list);
    console.log(lists);
    RemoveError(input1);
  }

  if (inputValue2 === "") {
    showError(input2, " Last name is required");
    console.log("Last name is required");
    return;
  } else {
    let list = document.createElement("li");
    list.textContent = "the last name is : " + inputValue2;
    lists.appendChild(list);
    console.log(lists);
    RemoveError(input2);
  }

  console.log("Form is valid");
}
let lists = document.getElementsByClassName("usersAnswer")[0];

function showError(input, message) {
  input.style.border = "2px solid red";
  let error = input.nextElementSibling;

  if (!error || !error.classList.contains("error")) {
    error = document.createElement("small");
    error.classList.add("error");
    input.insertAdjacentElement("afterend", error);
  }
  error.textContent = message;
  error.style.color = "red";
}

function RemoveError(input) {
  input.style.border = "2px solid green";
  let error = input.nextElementSibling;
  error.textContent = "";
}

// ===== Exercise 3 =====

// ----------- Transform the sentence -------------

let allBoldItems;

function getBoldItems() {
  allBoldItems = document.getElementsByTagName("strong");
}

function highlight() {
  getBoldItems();
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "blue";
  }
}

function returnItemsToDefault() {
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "black";
  }
}

let paragraphs = document.getElementsByTagName("p")[0];
paragraphs.addEventListener("mouseover", highlight);
paragraphs.addEventListener("mouseout", returnItemsToDefault);

// ===== Exercise 4 =====

// ----------- Volume of a sphere -------------

let form1 = document.getElementById("MyForm");
let radiusInput = document.getElementById("radius");
let volumeInput = document.getElementById("volume");

form1.addEventListener("submit", function (e) {
  e.preventDefault();

  let radius = parseFloat(radiusInput.value);

  if (isNaN(radius) || radius <= 0) {
    alert("Please enter a valid radius");
    volumeInput.value = "";
    return;
  }

  let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  volumeInput.value = volume.toFixed(2);
});
