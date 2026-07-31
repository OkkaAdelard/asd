/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculate and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

const employeeName : string = "Dimas"
const basicSalary : number = 5000000
const ovtHours : number = 12
const ovtRate : number = 50000

const ovtPay : number = ovtHours * ovtRate
const bonus : number = ovtHours > 10 ? ovtPay + 300000 : ovtPay
const finalsalary : number = bonus + basicSalary 

console.log(ovtPay)
console.log(bonus)
console.log(finalsalary)