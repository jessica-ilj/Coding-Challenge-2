//Task 1- Calulate the tip

let billSize = 200; // Assuming a customer pays $200

var tip;
if (billSize >= 50 && billSize <= 300) {
    tip = billSize * 0.15;
} else {
    tip = billSize * 0.20;   //this is the ternary operator for the required scenario
}
 
//Task 2- Output details
console.log("The bill was $" + billSize + ", the tip was $" + tip + ", and the total value is $" + (billSize + tip));  //bill is $200, tip is $30 and total value is $230 in this case.

