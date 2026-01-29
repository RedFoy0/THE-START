// ===== Exercise 1 =====

// ----------- Divisible by three -------------

let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] + ":" + (numbers[i] % 3 === 0));
}

// ===== Exercise 2 =====

// ----------- Attendance -------------

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina",
};

let names = prompt("enter your name ").toLowerCase();

if (names in guestList) {
  console.log("Hi! I'm " + names + ", and I'm from " + guestList[names]);
} else {
  console.log("Hi! I'm a guest.");
}

// ===== Exercise 3 =====

// ----------- Playing with numbers -------------

let sum = 0;
let max = 0;
let age = [20, 5, 12, 43, 98, 55];
for (let i = 0; i < age.length; i++) {
  sum = sum + age[i];
  if (max < age[i]) {
    max = age[i];
  }
}
console.log(sum);
console.log(max);
