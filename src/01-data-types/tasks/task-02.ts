/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */
 type user = {
    nameUser : string
    ID : string
    role : string
    isPremium : boolean
 } 
 const pembeli : user = {
    nameUser : 'Fatih',
    ID : 'TS-25',
    role : 'Buyer',
    isPremium : true
 }


type product= {
    productName : string
    code : string
    price : number
    currentStock : number
}
const keyboards : product = {
    productName : 'Mechanical Keyboard RGB',
    code : 'KBR-001',
    price : 850000,
    currentStock : 18
}
const discount : number = 0.25
const priceAfterDisc : number = keyboards.price * discount

console.log(`Buyer : ${pembeli.nameUser}`)
console.log(`Is Buyer Premium : ${pembeli.isPremium}`)
console.log(`Product : ${keyboards.productName}`)
console.log(`Product Code : ${keyboards.code}`)
console.log(`Price : ${keyboards.code}`)
console.log(`Discount : ${discount}`)
console.log(`After Discount : ${priceAfterDisc}`)
