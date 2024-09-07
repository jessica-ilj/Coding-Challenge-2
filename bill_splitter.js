//Task 1- Calulate the tip

let billAmount = 200; // Assuming a customer pays $200

let tip;
if (billAmount >= 50 && billAmount <= 300) {
    tip = billAmount * 0.15;
} else {
    tip = billAmount * 0.20;   //this is the ternary operator for the required scenario
}
 

