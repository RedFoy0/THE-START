// ===== Exercise 1 =====

// ----------- Checking the BMI -------------

const person1 = {
  FullName: "reda",
  Mass: 75,
  Height: 187,
  BMI: function () {
    let h = this.Height;
    let m = this.Mass;
    if (h > 10) {
      h = h / 100;
    }
    let bmi = m / (h * h);
    return bmi;
  },
};
const person2 = {
  FullName: "CHI 7D",
  Mass: 70,
  Height: 175,
  BMI: function () {
    let h = this.Height;
    let m = this.Mass;
    if (h > 10) {
      h = h / 100;
    }
    let bmi = m / (h * h);
    return bmi;
  },
};
function compar(p1, p2) {
  if (p1 < p2) {
    return person2.FullName;
  } else if (p1 > p2) {
    return person1.FullName;
  } else console.log("equal");
}
console.log(compar(person1.BMI(), person2.BMI()));

// ===== Exercise 2 =====

// ----------- Grade Average -------------

function findAvg(gradesList) {
  let sum = 0;
  for (let i = 0; i < gradesList.length; i++) {
    sum = sum + gradesList[i];
  }
  var average = sum / gradesList.length;
  console.log("the average is: " + average);
  return average;
}
function passed(average) {
  if (average >= 65) {
    console.log("passed");
    return "passed";
  } else {
    console.log("failed and must repeat the course");
    return "failed and must repeat the course";
  }
}
let grade1 = [44, 32, 100, 93, 25];
let grade2 = [100, 75, 80, 45, 50];

passed(findAvg(grade2));
