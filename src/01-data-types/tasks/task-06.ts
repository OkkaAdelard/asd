/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type product = {
    code : string
    name : string
    sellPrice : number
    quantity : number
    avgCustRating : number
    discount : number | null
}

const chikiBalls : product = {
    code: '548532',
    name: 'Chiki Balls',
    sellPrice: 3500,
    quantity: 250,
    avgCustRating: 4.5,
    discount: 25/100
}
const Milkuat : product = {
    code: '58932',
    name: 'Milkuat',
    sellPrice: 5500,
    quantity: 200,
    avgCustRating: 4.2,
    discount: null
}
const Chocolatos : product = {
    code: '123549',
    name: 'Chocolatos',
    sellPrice: 1000,
    quantity: 1000,
    avgCustRating: 5,
    discount: null
}