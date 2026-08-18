/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

type Student = {
  name: string,
  major: string,
  active: boolean,
}

const students: Student[] = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(arr: Student[]): number {
  let active = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].active) {
      active++;
    }
  }
  return active;
}

function countInactiveStudents(arr: Student[]): number {
  let inactive = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].active) {
      inactive++;
    }
  }
  return inactive;
}

function softwareEngineeringStudents(arr: Student[]): number {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].major === "Software Engineering") {
      total++;
    }
  }
  return total;
}

function networkingStudents(arr: Student[]): number {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].major === "Networking") {
      total++;
    }
  }
  return total;
}

function multimediaStudents(arr: Student[]): number {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].major === "Multimedia") {
      total++;
    }
  }
  return total;
}

console.log("===== University Enrollment Report =====");
console.log("Total Students               :", students.length);
console.log("Active Students              :", countActiveStudents(students));
console.log("Inactive Students            :", countInactiveStudents(students));
console.log("Software Engineering Students:", softwareEngineeringStudents(students));
console.log("Networking Students          :", networkingStudents(students));
console.log("Multimedia Students          :", multimediaStudents(students));