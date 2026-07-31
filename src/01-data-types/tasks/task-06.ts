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
    weight : string
    quantity : number
    avgCustRating : number
    discount : boolean
}

// const chikiBalls : product = {
//     code: '548532',
//     name: 'Chiki Balls',
//     sellPrice: 3500,
//     quantity: 250,
//     avgCustRating: 4.5,
//     discount: true
// }
// const Milkuat : product = {
//     code: '58932',
//     name: 'Milkuat',
//     sellPrice: 5500,
//     quantity: 200,
//     avgCustRating: 4.2,
//     discount: false
// }
// const Chocolatos : product = {
//     code: '123549',
//     name: 'Chocolatos',
//     sellPrice: 1000,
//     quantity: 1000,
//     avgCustRating: 5,
//     discount: false
// }

const Snack: product[] = [
    {code : '53215', name : 'ChikiBalls', sellPrice : 1500, weight : '5. gram', quantity: 1000, avgCustRating : 5, discount : true},
    {code : '89745', name : 'Milkuat', sellPrice : 4500, weight : '4.5 gram', quantity: 500, avgCustRating : 4.2, discount : false},
    {code : '78561', name : 'Chocolatos', sellPrice : 1000, weight : '1.5 gram', quantity: 1500, avgCustRating : 4.9, discount : false},
    {code : '32156', name : 'Sponge', sellPrice : 15000, weight : '12 gram', quantity: 100, avgCustRating : 4.1, discount : true},
    {code : '56123', name : 'Oreo', sellPrice : 2500, weight : '2 gram', quantity: 1400, avgCustRating : 4, discount : false},
]


console.log("========================================= Product List =========================================")
console.table(Snack)