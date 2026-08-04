/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */


const sales = [
  125000,
  350000,
  78000,
  910000,
  150000,
  420000,
  275000,
  99000,
  640000,
  18000
];

let totalSales = 0;
let moreThan300 = 0;

for (let i = 0; i < sales.length; i++) {
  totalSales += sales[i];

  if (sales[i] >= 300000) {
    moreThan300++;
  }
}

const avgSales: number = totalSales / sales.length;
const highest: number = Math.max(...sales);
const lowest: number = Math.min(...sales);

console.log("===== Sales Analysis =====");
console.log("Total Sales Revenue :", totalSales);
console.log("Highest Transaction :", highest);
console.log("Lowest Transaction  :", lowest);
console.log("Transactions > Rp300,000 :", moreThan300);
console.log("Average Transaction :", avgSales);