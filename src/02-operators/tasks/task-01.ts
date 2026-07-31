/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const friedRicePrice = 18000
const friedRiceQty = 3

const mineralWaterPrice = 5000
const mineralWaterQty = 2

const discount = 10000

const totalFoodPrice = friedRicePrice * friedRiceQty
const totalDrinkPrice = mineralWaterPrice * mineralWaterQty
const grandTotal = totalFoodPrice + totalDrinkPrice
const finalPayment = grandTotal - discount

console.log("=== Cafeteria Payment Summary ===");
console.log("Total Food Price      : Rp" + totalFoodPrice)
console.log("Total Drink Price     : Rp" + totalDrinkPrice)
console.log("Grand Total           : Rp" + grandTotal)
console.log("Discount              : Rp" + discount)
console.log("Final Payment         : Rp" + finalPayment)
