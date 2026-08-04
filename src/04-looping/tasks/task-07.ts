/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

import { count } from "node:console";

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentCount = 0;
let absentCount = 0;

console.log("Absent Students:");

for (let i = 0; i < attendances.length; i++) {
  if (attendances[i].present) {
    presentCount++;
  } else {
    absentCount++;
    console.log("- " + attendances[i].name);
  }
}

const attendancePercentage = (presentCount / attendances.length) * 100;

console.log("\nPresent Students :", presentCount);
console.log("Absent Students  :", absentCount);
console.log("Attendance       :", attendancePercentage + "%");