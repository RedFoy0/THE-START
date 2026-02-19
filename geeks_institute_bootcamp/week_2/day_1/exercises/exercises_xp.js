// // ===== Exercise 1 =====

// // ------------- Scope -------------

// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`); 
// // prediction : aytl3 alert fih inside the funcOne function 3
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared
// // with const instead of let ?        
// //  prediction : aytl3 error

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared
// // with const instead of let ?

// // prediction : awl alert aytl3 inside the funcThree function 0 tani alert aytl3 error

// //#3
// function funcFour() {
//     window.a = "hello";
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive() 
// // prediction : flwl atsayb a o at3taha hello fl window oftani atl3 inside the funcFive function hello


// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared
// // with const instead of let ? 

// // prediction : at5dm 3adi

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared
// // with const instead of let ?
// prediction :scopes m5talfin li katbdl fihom l9ima donc at5dm 3adi

// ===== Exercise 2 =====

// ------------- Ternary operator -------------

// function winBattle(){
//     return true;
// }

// Transform the winBattle() function to an arrow function.

const winBattle = () => true;

// Create a variable called experiencePoints.

let experiencePoints;

// Assign to this variable

experiencePoints = winBattle() ? 10 : 1;

// Console.log the experiencePoints variable.

console.log(experiencePoints);

// ===== Exercise 3 =====

// ----------- Is it a string ? -------------

const isString = (value) => typeof value === "string";

console.log(isString("hello"));
console.log(isString([1, 2, 4, 0]));

// ===== Exercise 4 =====

// ----------- Find the sum -------------

const sum = (a, b) => a + b;

// ===== Exercise 5 =====

// ----------- Kg and grams -------------

// function declaration

function kgToGrams(kg) {
  return kg * 1000;
}

console.log(kgToGrams(2));

// function expression

const kgToGrams2 = function (kg) {
  return kg * 1000;
};

console.log(kgToGrams2(3));

// Function declaration t9dr t5dm biha 9bl matktbha , function expression 5asha tktb 9bl matst3mlha

// one line arrow function

const kgToGrams3 = (kg) => kg * 1000;
console.log(kgToGrams3(5));

// ===== Exercise 6 =====

// ----------- Fortune teller -------------

(function (children, partner, location, job) {
  document.body.innerHTML = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
})(3, "Sara", "Tokyo", "Designer");

// ===== Exercise 7 =====

// ----------- Welcome -------------

let nav = document.getElementById("navbar");
console.log(nav);

(function (username) {
  const userDiv = document.createElement("div");
  userDiv.textContent = "Welcome " + username;

  const img = document.createElement("img");
  img.src = "https://encyclopedia.ushmm.org/content/en/article/adolf-hitler";
  img.style.borderRadius = "50%";
  img.style.marginLeft = "10px";

  console.log(nav);

  userDiv.appendChild(img);
  nav.appendChild(userDiv);
})("John");

// ===== Exercise 8 =====

// ----------- Juice Bar -------------

// Part I ----------

function makeJuice(size) {

    function addIngredients(ing1, ing2, ing3) {
        const sentence = `The client wants a ${size} drink juice, containing ${ing1}, ${ing2}, ${ing3}.`;
        document.body.innerHTML += `<p>${sentence}</p>`;
    }

    addIngredients("apple", "banana", "orange");
}

makeJuice("medium");

// Part II ----------

function makeJuice(size) {

    let ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        const sentence = `The client wants a ${size} drink juice, containing ${ingredients.join(", ")}.`;
        document.body.innerHTML += `<p>${sentence}</p>`;
    }

    addIngredients("apple", "banana", "orange");
    addIngredients("mango", "kiwi", "pineapple");


    displayJuice();
}


makeJuice("large");
