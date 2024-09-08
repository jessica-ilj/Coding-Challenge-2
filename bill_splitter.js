//Task 1- Calulate the tip

let billSize = 200; // Assuming a customer pays $200

var tip = (billSize >= 50 && billSize <= 300) ? billSize * 0.15 : billSize * 0.2; // Using a ternary operator to calculate the tip


//Task 2- Output Details
console.log("The bill was $"+ billSize + ", the tip was $" + tip + ",and the total value is $" + (billSize+tip)); //in this case, The bill was $200, the tip was $30,and the total value is $230.
