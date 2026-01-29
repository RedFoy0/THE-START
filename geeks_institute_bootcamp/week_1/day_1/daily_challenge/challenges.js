// ====== Daily Challenge 1 ======

// ----------- Not Bad -------------

let sentence = prompt("that contains the words “not” and “bad”");
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad) {
  console.log("kayna");
  let final = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(final);
} else {
  console.log(sentence);
}

// ====== Daily Challenge 2 ======

// ----------- Stars -------------

let ktaba = "";
for (let i = 0; i < 6; i++) {
  ktaba = ktaba + "* ";
  console.log(ktaba);
}

ktaba = "";
for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= i; j++) {
    ktaba = ktaba + "* ";
    console.log(ktaba);
  }
}
