/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */

type Attendance = {
    name: string;
    present: boolean;
};

const attendances: Attendance[] = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

function printAttendanceReport(attendances: Attendance[]): void {
    let totalPresent = 0;
    let totalAbsent = 0;
    let absentStudents: string[] = [];

    for (let attendance of attendances) {
        if (attendance.present) {
            totalPresent++;
        } else {
            totalAbsent++;
            absentStudents.push(attendance.name);
        }
    }

    console.log("===== Attendance Report =====");
    console.log("Total Students :", attendances.length);
    console.log("Total Present  :", totalPresent);
    console.log("Total Absent   :", totalAbsent);
    console.log("Absent Students:");

    for (let name of absentStudents) {
        console.log("- " + name);
    }
}

printAttendanceReport(attendances);