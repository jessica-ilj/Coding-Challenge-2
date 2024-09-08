//Task 1- Calulate the tip

let billSize = 200; // Assuming a customer pays $200

var tip = (billSize >= 50 && billSize <= 300) ? billSize * 0.15 : billSize * 0.2; // Using a ternary operator to calculate the tip


//Task 2- Output Details
console.log("The bill was $"+ billSize + ", the tip was $" + tip + ",and the total value is $" + (billSize+tip)); //in this case, The bill was $200, the tip was $30,and the total value is $230.

//Task 3- Create a function to calculate tip

function calculateTip(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2; // this is the function to calculate the tip based on the bill amount
}

const examplebill = 100;  // Testing the function with a bill value of $100
const exampletip = calculateTip(examplebill);
console.log("Bill= $" + examplebill + ", tip= $" + exampletip);

//Task 4- utilize arrays
const billsa = [275, 40, 430]; //array of bills with provided dataset
const billsb = [125, 555, 44];

const tipsa = billsa.map(bill => calculateTip(bill)); // the array of tips for billsa
const totalsa = billsa.map((bill, index) => bill + tipsa[index]); // the array totals for billsa


const tipsb = billsb.map(bill => calculateTip(bill)); //the array of tips for billsb
const totalsb = billsb.map((bill, index) => bill + tipsb[index]); //the array of totals for billsb

