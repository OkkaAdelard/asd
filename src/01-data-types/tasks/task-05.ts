/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type employee = {
    id : string
    name : string
    dot : string
    checkInTime : string
    checkOutTime : string
    totalWorkHours : number
    present : boolean
}

const prabu : employee = {
    id: '542251396',
    name: 'Pranu Prabru Prapre',
    dot: '15-2-2026',
    checkInTime: "05.00 WIB",
    checkOutTime: "00.00 WIB",
    totalWorkHours: 19,
    present: false
}

const fatih : employee = {
    id: '542251182',
    name: 'Fatty Blacky',
    dot: '13-5-2026',
    checkInTime: "23.59 WIB",
    checkOutTime: "00.00 WIB",
    totalWorkHours: 0.01,
    present: true
}

const zahira : employee = {
    id: '542251399',
    name: 'Aratace yes',
    dot: '16-2-2026',
    checkInTime: "00.00 WIB",
    checkOutTime: "00.00 WIB",
    totalWorkHours: 0,
    present: true
}

console.log(zahira)
console.log(fatih)
console.log(prabu)