// ===== Exercise 1 =====

// ------------- List of people -------------

const people = ["Greg", "Mary", "Devon", "James"];
console.log(people);

// Part I ------ Review about arrays ------

// code to remove “Greg”
people.shift();
console.log(people);

// code to replace “James” to “Jason”
people[people.indexOf("James")] = "Jason";
console.log(people);

// code to add “MyName” to the end of the array
people.push("Reda");
console.log(people);

// code to console.log the index of “Mary”
console.log(people.indexOf("Mary"));

// make a copy of the people array excluding “Mary” and “MyName”
const PeopleCopy = people.slice(1, 3);
console.log(PeopleCopy);

// code that gives the index of “Foo”
console.log(people.indexOf("Foo")); // returns -1 because "Foo" is not in the array

// code to get the last element of the array
console.log(people[people.length - 1]);

// Part II ------ Loops ------

// Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}

// ===== Exercise 2 =====

// ------------- Your favorite colors -------------

// Create an array called colors where the value is a list of your five favorite colors.
const colors = ["banafsaji", "a7mar", "azra9", "a5dar", "asfar"];

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect…
for (let i = 0; i < colors.length; i++) {
  console.log("My " + (i + 1) + " choice is " + colors[i]);
}

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, ect…

const suffixes = ["st", "nd", "rd", "th"];
for (let i = 0; i < colors.length; i++) {
  if (i == 0) {
    suffixes[i] = "st";
  } else if (i == 1) {
    suffixes[i] = "nd";
  } else if (i == 2) {
    suffixes[i] = "rd";
  } else {
    suffixes[i] = "th";
  }
  console.log("My " + (i + 1) + suffixes[i] + " choice is " + colors[i]);
}

// ===== Exercise 3 =====

// ----------- Repeat the question -------------

// Prompt the user for a number
let number = prompt("Please enter a number:");

// // the number is smaller than 10 continue asking the user for a new number
while (number < 10 || isNaN(number)) {
  if (number < 10) {
    number = prompt(
      "The number is smaller than 10, please enter a new number:",
    );
  } else {
    number = prompt("please enter a reel number:");
  }
}

// ===== Exercise 4 =====

// ----------- Building Management -------------

// Instructions:

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

// Console.log the number of floors in the building
console.log("the number of floors in the building: " + building.numberOfFloors);

// Console.log how many apartments are on the floors 1 and 3.
console.log(
  "the number of apartments the floor 1: " +
    building.numberOfAptByFloor.firstFloor,
);
console.log(
  "the number of apartments the floor 3: " +
    building.numberOfAptByFloor.thirdFloor,
);
console.log(
  "the number of apartments the floors 1 and 3 : " +
    (building.numberOfAptByFloor.firstFloor +
      building.numberOfAptByFloor.thirdFloor),
);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
let theSecondTenant = building.nameOfTenants[1];
console.log("the name of the second tenant : " + theSecondTenant);
theSecondTenant = theSecondTenant.toLowerCase();
console.log(
  "the number of rooms he has in his apartment : " +
    building.numberOfRoomsAndRent[theSecondTenant][0],
);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200

let sum =
  building.numberOfRoomsAndRent.sarah[1] +
  building.numberOfRoomsAndRent.david[1];

if (sum > building.numberOfRoomsAndRent.dan[1]) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}

// ===== Exercise 5 =====

// ----------- Family -------------

// Create an object called family with a few key value pairs.
const family = {
  familymembers: 12,
  adress: "chi blasa",
  credit: 12000,
};

// Using a for in loop, console.log the keys of the object.

for (let keys in family) {
  console.log(keys);
}

// Using a for in loop, console.log the values of the object.

for (let keys in family) {
  console.log(family[keys]);
}

// ===== Exercise 6 =====

// ----------- Rudolf -------------

const details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer",
};

// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
let jomla = "";
for (let keys in details) {
  jomla = jomla + keys + " " + details[keys] + " ";
}
console.log(jomla);
// console.log("my name is Rudolf the reindeer");

// ===== Exercise 7 =====

// ----------- Secret Group -------------

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.

let secret = "";
for (let i = 0; i < names.length; i++) {
  secret = secret + names[i][0];
}
console.log(secret);
