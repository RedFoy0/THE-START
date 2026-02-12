// ===== Exercise 1 =====

// ----------- Select a kind of Music -------------

let select1 = document.getElementById("genres");
console.log(select1.value);

let classic = document.createElement("option");
classic.textContent = "Classic";
select1.appendChild(classic);
document.createAttribute("value", classic);
classic.selected = true;

// ===== Exercise 2 =====

// ----------- Delete colors -------------

const select = document.getElementById("colorSelect");
const btn = document.querySelector('input[type="button"]');

btn.addEventListener("click", removeColor);

function removeColor() {
  const selectedIndex = select.selectedIndex;

  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
}

// ===== Exercise 3 =====

// ----------- Create a shopping list -------------

let shoppingList = [];

const root = document.getElementById("root");
const form = document.createElement("form");
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Add item";

const addBtn = document.createElement("button");
addBtn.textContent = "AddItem";

form.appendChild(input);
form.appendChild(addBtn);
root.appendChild(form);

const ul = document.createElement("ul");
root.appendChild(ul);

const clearBtn = document.createElement("button");
clearBtn.textContent = "ClearAll";
root.appendChild(clearBtn);

// add item
function addItem(e) {
  e.preventDefault();

  if (input.value.trim() === "") return;

  shoppingList.push(input.value);
  input.value = "";
  renderList();
}

// clear all
function clearAll() {
  shoppingList = [];
  renderList();
}

// render list
function renderList() {
  ul.innerHTML = "";

  for (let i = 0; i < shoppingList.length; i++) {
    const li = document.createElement("li");
    li.textContent = shoppingList[i];
    ul.appendChild(li);
  }
}

form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearAll);
