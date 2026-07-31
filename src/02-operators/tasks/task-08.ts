/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const previousMeter: number = 25640
const currentMeter: number = 25892
const elecPricePerKwh: number = 1650
const solarPanelInstalled: boolean = true
const energySavingMode: boolean = false


const elecUsage: number = currentMeter - previousMeter
const electricityBill: number = elecUsage * elecPricePerKwh
const discountSolarPanel: number = solarPanelInstalled ? electricityBill * 0.20 : 0
const discountSavingMode: number = energySavingMode ? electricityBill * 0.05 : 0
const totalDiscount: number = discountSolarPanel + discountSavingMode
const finalBill: number = electricityBill - totalDiscount
const greenEnergyProgram: boolean =
    solarPanelInstalled 
    elecUsage < 300 
    energySavingMode
console.log("Electricity Usage:", elecUsage, "kWh")
console.log("Electricity Bill: Rp", electricityBill)
console.log("Solar Panel Discount: Rp", discountSolarPanel)
console.log("Energy Saving Discount: Rp", discountSavingMode)
console.log("Final Bill: Rp", finalBill)
console.log("Eligible for Green Energy Program:", greenEnergyProgram)