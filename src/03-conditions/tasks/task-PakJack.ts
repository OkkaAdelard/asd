type siswa = {
    name: string
    gpa: number
    familyIncome: number
    competitionCount: number
    diciplaryRecord: boolean
    documentComplete: boolean
}

const students: siswa[] = [
    { name: "Fajar", gpa: 3.40, familyIncome: 1500000, competitionCount: 5, diciplaryRecord: false, documentComplete: true },
    { name: "Fara", gpa: 2.10, familyIncome: 5000000, competitionCount: 0, diciplaryRecord: false, documentComplete: true },
    { name: "Nola", gpa: 4.00, familyIncome: 4000000, competitionCount: 2, diciplaryRecord: true, documentComplete: true },
    { name: "Dimas", gpa: 2.50, familyIncome: 50000000, competitionCount: 4, diciplaryRecord: false, documentComplete: true },
    { name: "Zulfikar", gpa: 1.20, familyIncome: 25000000, competitionCount: 5, diciplaryRecord: false, documentComplete: false },
    { name: "Fikri", gpa: 3.50, familyIncome: 15000000, competitionCount: 6, diciplaryRecord: true, documentComplete: true },
    { name: "Ara", gpa: 3.46, familyIncome: 10000000, competitionCount: 1, diciplaryRecord: false, documentComplete: true },
    { name: "Tazkia", gpa: 3.58, familyIncome: 100000000, competitionCount: 10, diciplaryRecord: true, documentComplete: false }
];

let scholarEligible : boolean = true
let firstScreening : boolean = true
let secScreening : boolean = true

for (let i = 0; i < students.length; i++) {

    if (students[i].gpa >= 3.75 && students[i].familyIncome < 5000000) {
        firstScreening = true

    } else {
        firstScreening = false
        console.log(`Sorry ${students[i].name}, you are not eligible for the scholarship`)
    }

    if (firstScreening == true) {
        if (students[i].competitionCount >= 3 && students[i].diciplaryRecord == false && students[i].documentComplete == true) {
            secScreening = true
            scholarEligible = true
        } else {
            secScreening = false
            scholarEligible = false
            console.log(`Passed First Screening, but Failed Second Screening`)
        }
    }

    if (scholarEligible == true) {
        console.log(`Congratulations ${students[i].name}, your scholarship is approved`)
    }

    console.log(`==========================================`)
}