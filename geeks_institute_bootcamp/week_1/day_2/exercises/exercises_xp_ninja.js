// ===== Exercise 1 =====

// ----------- Random Number -------------

let randomNum = prompt("Get a random number between 1 and 100");
for (let i = 0; i <= randomNum; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// ===== Exercise 2 =====

// ----------- Capitalized letters -------------

function capitalizeLetters(str) {
  let evenCap = "";
  let oddCap = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      evenCap += str[i].toUpperCase();
      oddCap += str[i];
    } else {
      evenCap += str[i];
      oddCap += str[i].toUpperCase();
    }
  }

  return [evenCap, oddCap];
}
// console.log(capitalizeLetters("abcdef"));

// ===== Exercise 3 =====

// ----------- Is palindrome? -------------

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("bob"));
console.log(isPalindrome("kayak"));
console.log(isPalindrome("hello"));

// ===== Exercise 4 =====

// ----------- Biggest Number -------------

function biggestNumberInArray(arrayNumber) {
  let max = 0;

  for (let i = 0; i < arrayNumber.length; i++) {
    if (typeof arrayNumber[i] === "number") {
      if (arrayNumber[i] > max) {
        max = arrayNumber[i];
      }
    }
  }

  return max;
}

// const array1 = [-1, 0, 3, 100, 99, 2, 99];
// console.log(biggestNumberInArray(array1));

// const array2 = ['a', 3, 4, 2];
// console.log(biggestNumberInArray(array2));

// const array3 = [];
// console.log(biggestNumberInArray(array3));

// ===== Exercise 5 =====

// ----------- Unique Elements -------------

function uniqueElements(arr) {
  let newList = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newList.includes(arr[i])) {
      newList.push(arr[i]);
    }
  }

  return newList;
}
// console.log(uniqueElements([1, 2, 3, 3, 3, 4, 5]));
// console.log(uniqueElements([1, 2, 3, 3, 3, 3, 4, 5]));

// ===== Exercise 6 =====

// ----------- Calendar -------------
