/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const ratePerHour : number = 8000
//discount ammount
const discount : number = 15*100
//total playing in minute
const totalPlayingTime : number = (7*60) +35
//remaining minutes after full hour
const remainingMinutes : number = totalPlayingTime % 60
//total pay before discount
const totalPay : number = ratePerHour / (totalPlayingTime / 60)
//total pay after discound
const payAfterDiscount : number = totalPlayingTime > 5 ? totalPay - (totalPay * discount) : totalPay


