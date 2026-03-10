// ====== Daily Challenge 1 ======

// ----------- HTML Form -------------

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <title>Form to JSON</title>
// </head>

// <body>

//     <h2>Form Example</h2>

//     <form id="myForm">
//         <input type="text" id="name" placeholder="Name">
//         <input type="text" id="lastname" placeholder="Last Name">
//         <input type="submit" value="Send">
//     </form>

//     <pre id="output"></pre>

//     </script>

// </body>

// </html>

const form = document.getElementById('myForm');
const output = document.getElementById('output');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;

    const data = {
        name: name,
        lastname: lastname
    };

    output.textContent = JSON.stringify(data); // Display JSON in <pre>
});

// ====== Daily Challenge 2 ======

// ----------- True or False -------------

function allTruthy(...args) {
  return args.every(value => Boolean(value));
}

console.log(allTruthy(true, true, true));
console.log(allTruthy(true, false, true));
console.log(allTruthy(5, 4, 3, 2, 1, 0));