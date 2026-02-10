// ====== Daily Challenge 1 ======

// ----------- Tell the story -------------

let form = document.getElementById("libform");
let story = document.getElementById("story");
let noun = document.getElementById("noun");
let adjective = document.getElementById("adjective");
let person = document.getElementById("person");
let verb = document.getElementById("verb");
let place = document.getElementById("place");
let btn = document.getElementById("lib-button");

btn.textContent = "darija";
btn.addEventListener("click", goll9isa);
let engBtn = document.createElement("button");
engBtn.textContent = "english";
form.appendChild(engBtn);
engBtn.addEventListener("click", tellTheStory);

function tellTheStory(e) {
  e.preventDefault();
  let al9isa =
    " hi my name is " +
    noun.value +
    " i am a " +
    adjective.value +
    " today i found a new friend named" +
    person.value +
    " that person  " +
    verb.value +
    " in " +
    place.value;
  console.log(al9isa);
  story.textContent = al9isa;
}

function goll9isa(e) {
  e.preventDefault();
  let al9isa =
    " kan ya makan fi 9adimi zaman kana honaka cha5son yod3a " +
    noun.value +
    " kana yo3rafo bi anho " +
    adjective.value +
    " wa fi yawmin mina l 2ayam ilta9a bi " +
    person.value +
    " wajada dalika cha5s " +
    verb.value +
    " fi " +
    place.value;
  console.log(al9isa);
  story.textContent = al9isa;
}

// ====== Daily Challenge 2 ======

// ----------- Letters -------------

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Write letters only";

document.body.appendChild(input);

input.addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-Z]/g, "");
});
