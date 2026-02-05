// ===== Exercise 1 =====

// ----------- Change the article -------------
let firstH = document.getElementsByTagName("h1")[0];
console.log(firstH);

let Article = document.getElementsByTagName("article")[0];
let lastpara = Article.lastElementChild
Article.removeChild(lastpara)

let secondH = document.getElementsByTagName("h2")[0];
secondH.addEventListener("click" , changeColor)
function changeColor() {
    secondH.style.backgroundColor = "red"
}

let thirdH = document.getElementsByTagName("h3")[0];
thirdH.addEventListener("click" , hide)
function hide() {
    thirdH.style.display = "none"

}

let btn = document.createElement("button")
btn.textContent = "bold"
let body = document.getElementsByTagName("body")[0]
body.appendChild(btn)

document.addEventListener("click" , bold)
function bold() {
    let paragraphs = document.querySelectorAll("p");

  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontWeight = "bold";
  }
}


// bonus 1

let randomNum = Math.floor(Math.random() * 100);

firstH.addEventListener("mouseover" , changeFontSize)
function changeFontSize() {
    firstH.style.fontSize = randomNum + "px"
}

console.log (randomNum)

// bonus 2


// ===== Exercise 2 =====

// ----------- Work with forms -------------

// ===== Exercise 3 =====

// ----------- Transform the sentence -------------

let allBoldItems;

function getBoldItems() {
  allBoldItems = document.getElementsByTagName("strong");
}

function highlight() {
    getBoldItems()
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
paragraphs.addEventListener("mouseover",highlight)
paragraphs.addEventListener("mouseout",returnItemsToDefault)

// ===== Exercise 4 =====

// ----------- Volume of a sphere -------------
