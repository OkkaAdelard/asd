/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type student = {
    studentID : string
    name : string
    age : number
    isActive : boolean
}
const mokleters : student[] = [{
    studentID : '542251392',
    name : 'Okka Adelard Syahbarr',
    age : 16,
    isActive : true
},
{
    studentID: '542251182',
    name : 'Fatih Lintang Adzhahabi',
    age : 16,
    isActive: false
},{
    studentID: '542251396',
    name : 'Prabu Panedya Firdaus Putra Aglar',
    age : 16,
    isActive: false
} 
]

console.log(mokleters)