/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */
type student ={
    name : string
    gpa : number
    famIncome : number
    competition: number
    disciplinaryRec : boolean
    docComplete : boolean
} 
let scholarEligible : boolean = true
let firstScreening : boolean = true
let secScreening : boolean = true

const iku : student = {
    name : "Fajar Hidayat",
    gpa : 3.86,
    famIncome : 4200000,
    competition : 4,
    disciplinaryRec: false,
    docComplete: true
}

if (iku.gpa >= 3.75 && iku.famIncome < 5000000) {
   firstScreening = true

} else {
    firstScreening = false
    console.log(`Sorry ${iku.name}, you are not eligible for the scholarship`)
}

if (firstScreening == true) {
    if (iku.competition >= 3 && iku.disciplinaryRec == false && iku.docComplete == true) {
        secScreening = true
        scholarEligible = true
    } else {
        secScreening = false
        scholarEligible = false
        console.log(`Passed First Screening, but Failed Second Screening`)
    }
}

if (scholarEligible == true){
    console.log(`Congratulations ${iku.name}, your scholarship is approved`)}