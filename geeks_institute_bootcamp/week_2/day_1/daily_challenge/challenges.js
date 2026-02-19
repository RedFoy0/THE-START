// ====== Daily Challenge ======

// ----------- Groceries-------------

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};
displayGroceries();

const cloneGroceries = () => {

   
    let user = client;


    client = "Betty";

    console.log("client:", client); 
    console.log("user:", user);     


    let shopping = groceries;

    groceries.totalPrice = "35$";

    console.log("shopping total:", shopping.totalPrice); 


    groceries.other.paid = false;

    console.log("shopping paid:", shopping.other.paid); 
};

