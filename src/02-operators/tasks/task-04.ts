/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const keyboardPrice : number = 850000
const mousePrice : number = 275000
const mousePadPrice : number = 120000

const keyboardQty : number = 1
const mouseQty : number = 2
const mousePadQty : number = 1

const subtotal : number = (keyboardPrice * keyboardQty) + (mousePrice * mouseQty) + (mousePadPrice * mousePadQty)
let totalItems : number = 0

totalItems += keyboardQty
totalItems += mouseQty
totalItems += mousePadQty

const discount : number = subtotal > 1000000 ? subtotal * 0.1 : 0
const finalPayment : number = subtotal - discount
const isPremiumMember : boolean = true

console.log(subtotal)
console.log(totalItems)
console.log(discount)
console.log(finalPayment)