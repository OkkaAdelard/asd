/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */

const students = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

type Student = {
    name: string;
    score: number;
    attendance: number;
};

function processStudents(
    students: Student[],
    callback: (student: Student) => void
): void {
    students.forEach(callback);
}

function checkPassFail(student: Student): void {
    const status = student.score >= 75 ? "Passed" : "Failed";
    console.log(`${student.name}: ${status}`);
}

function categorizePerformance(student: Student): void {
    let category: string;
    if (student.score >= 90 && student.attendance >= 90) {
        category = "Excellent";
    } else if (student.score >= 75 && student.attendance >= 90) {
        category = "Good";
    } else if (student.score >= 75 && student.attendance < 90) {
        category = "Improve Attendance";
    } else {
        category = "Improve Academic Performance";
    }
    console.log(`${student.name}: ${category}`);
}

console.log("Pass/Fail Status:");
processStudents(students, checkPassFail);
console.log("\nPerformance Category:");
processStudents(students, categorizePerformance);