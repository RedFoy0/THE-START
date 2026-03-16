// // ===== Exercise 1 =====

// // ------------- Comparison -------------

function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`${num} is less than or equal to 10`);
        } else {
            reject(`${num} is greater than 10`);
        }
    });
}

compareToTen(15)
    .then(result => console.log("Success:", result))
    .catch(error => console.log("Error:", error));


compareToTen(8)
    .then(result => console.log("Success:", result))
    .catch(error => console.log("Error:", error));

// ===== Exercise 2 =====

// ------------- Promises -------------

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 4000);
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));

// ===== Exercise 3 =====

// ----------- Resolve & Reject -------------

const resolvedPromise = Promise.resolve(3);

resolvedPromise
    .then(result => {
        console.log("Resolved:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });


const rejectedPromise = Promise.reject("Boo!");

rejectedPromise
    .then(result => {
        console.log("Resolved:", result);
    })
    .catch(error => {
        console.log("Rejected:", error);
    });