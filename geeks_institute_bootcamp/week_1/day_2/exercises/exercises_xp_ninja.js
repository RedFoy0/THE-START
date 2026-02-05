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

function createCalendar(year, month) {
  const monthinsdex = month - 1;

  const weekdays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";

  const headRow = document.createElement("tr");
  for (let i = 0; i < weekdays.length; i++) {
    const th = document.createElement("th");
    th.textContent = weekdays[i];
    th.style.border = "1px solid #ccc";
    th.style.padding = "8px";
    th.style.backgroundColor = " rgba(255, 229, 229, 0.82)";
    headRow.appendChild(th);
  }
  table.appendChild(headRow);

  function mondayFirstIndex(jsDay) {
    return (jsDay + 6) % 7;
  }

  const firstDay = new Date(year, monthinsdex, 1);
  const startIndex = mondayFirstIndex(firstDay.getDay());
  const lastDate = new Date(year, monthinsdex + 1, 0).getDate();

  let day = 1;

  while (day <= lastDate) {
    const tr = document.createElement("tr");

    for (let col = 0; col < 7; col++) {
      const td = document.createElement("td");
      td.style.border = "1px solid #ccc";
      td.style.padding = "8px";
      td.style.textAlign = "center";
      td.style.width = "40px";
      td.style.height = "30px";

      if ((day === 1 && col < startIndex) || day > lastDate) {
        td.textContent = "";
      } else {
        td.textContent = day;
        day++;
      }

      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  document.body.appendChild(table);
}

// example
createCalendar(2012, 9);
