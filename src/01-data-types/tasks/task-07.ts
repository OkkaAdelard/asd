/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type student ={
    studentID : string
    name : string
    gradeLvl : number
}
const fatih : student ={
    studentID: "54225125498",
    name: "Fatih Lintang",
    gradeLvl: 11
}
const prabu : student ={
    studentID: "45646532",
    name: "Prabu Lintang",
    gradeLvl: 11
}
const raja : student ={
    studentID: "123456",
    name: "Raja Lintang",
    gradeLvl: 12
}




type course = {
    courseID : string
    tittle : string
    instName : string
    learningHours : number
}
const math : course ={
    courseID: "1252",
    tittle: "Matematika",
    instName : 'Pak Abi',
    learningHours : 5
}
const pkn : course ={
    courseID: "1225",
    tittle: "Pendidikan Kewarganegaraan dan Pancasila",
    instName : 'Bu Rara',
    learningHours : 2
}
const rpl : course ={
    courseID: "1233",
    tittle: "Rekayasa Perangkat Lunak",
    instName : 'Pak Jack',
    learningHours : 12
}




type registration = {
    customer : student
    course : course
    date : string
    payment : boolean
}
const day1 : registration = {
    customer : fatih,
    course : math,
    date : '14-2-2025',
    payment : false
}
const day2 : registration = {
    customer : prabu,
    course : pkn,
    date : '16-7-2025',
    payment : true
}
const day3 : registration = {
    customer : raja,
    course : rpl,
    date : '18-7-2023',
    payment : true
}

console.log(day1)
console.log(day2)
console.log(day3)