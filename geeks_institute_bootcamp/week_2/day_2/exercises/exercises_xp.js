// // ===== Exercise 1 =====

// // ------------- Scope -------------

// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`); // aytl3 alert fih inside the funcOne function 3
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?        // aytl3 error 


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




// ===== Exercise 2 =====

// ------------- Ternary operator -------------

function winBattle(){
    return true;
}

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

console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0]));


// ===== Exercise 4 =====

// ----------- Find the sum -------------

const sum = (a, b) => a + b;


// ===== Exercise 5 =====

// ----------- Kg and grams -------------

// function declaration

function kgToGrams(kg){
  return kg * 1000;
}

console.log(kgToGrams(2)); 

// function expression

const kgToGrams2 = function(kg){
  return kg * 1000;
}

console.log(kgToGrams2(3));

// Function declaration t9dr t5dm biha 9bl matktbha , function expression 5asha tktb 9bl matst3mlha

// one line arrow function

const kgToGrams3 = kg => kg * 1000;
console.log(kgToGrams3(5));


// ===== Exercise 6 =====

// ----------- Fortune teller -------------

(function(children, partner, location, job){

  document.body.innerHTML =
  `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;

})(3, "Sara", "Tokyo", "Designer");


// ===== Exercise 7 =====

// ----------- Welcome -------------


// ===== Exercise 8 =====

// ----------- Juice Bar -------------

// Part I ----------

// Part II ----------