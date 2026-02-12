const board = document.querySelector(".board");

const rows = 30;
const cols = 50;

for (let i = 0; i < rows * cols; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  board.appendChild(square);
}

let selectedColor = "";

const colors = document.querySelectorAll(".color");

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", function () {
    selectedColor = this.style.backgroundColor;

    console.log("Selected:", selectedColor);
  });
}

const squares = document.querySelectorAll(".square");

let isDrawing = false;

document.addEventListener("mousedown", () => (isDrawing = true));
document.addEventListener("mouseup", () => (isDrawing = false));

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("mousedown", function () {
    this.style.backgroundColor = selectedColor;
  });

  squares[i].addEventListener("mouseover", function () {
    if (isDrawing) {
      this.style.backgroundColor = selectedColor;
    }
  });
}

// L BOTONA LI KATM7I KOLCHI

const ClrBtn = document.getElementById("clearBtn");

ClrBtn.addEventListener("click", clear);
function clear() {
  console.log("reda");
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "white";
  }
}
