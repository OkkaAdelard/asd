type Submission = {
  student: string;
  submitted: boolean;
  score: number;
};

const submissions: Submission[] = [
  {
    student: "Alya",
    submitted: true,
    score: 90
  },
  {
    student: "Budi",
    submitted: false,
    score: 0
  },
  {
    student: "Citra",
    submitted: true,
    score: 84
  },
  {
    student: "Dimas",
    submitted: true,
    score: 72
  },
  {
    student: "Eka",
    submitted: false,
    score: 0
  },
  {
    student: "Fajar",
    submitted: true,
    score: 96
  }
];


function getTotalStudents(data: Submission[]): number {
  return data.length;
}


function getSubmittedAssignments(data: Submission[]): number {
  let total = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].submitted) {
      total++;
    }
  }

  return total;
}


function getMissingAssignments(data: Submission[]): number {
  let total = 0;

  for (let i = 0; i < data.length; i++) {
    if (!data[i].submitted) {
      total++;
    }
  }

  return total;
}


function getPassedStudents(data: Submission[]): number {
  let total = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].submitted) {
      if (data[i].score >= 75) {
        total++;
      }
    }
  }

  return total;
}


function getRevisionStudents(data: Submission[]): number {
  let total = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].submitted) {
      if (data[i].score < 75) {
        total++;
      }
    }
  }

  return total;
}


function getAverageScore(data: Submission[]): number {
  let total = 0;

  for (let i = 0; i < data.length; i++) {
    total += data[i].score;
  }

  return total / data.length;
}


function getHighestScore(data: Submission[]): number {
  let highest = data[0].score;

  for (let i = 1; i < data.length; i++) {
    if (data[i].score > highest) {
      highest = data[i].score;
    }
  }

  return highest;
}


function getLowestScore(data: Submission[]): number {
  let lowest = data[0].score;

  for (let i = 1; i < data.length; i++) {
    if (data[i].score < lowest) {
      lowest = data[i].score;
    }
  }

  return lowest;
}


function printReport(data: Submission[]): void {
  console.log("===== LMS Assignment Report =====");
  console.log("Total Students:", getTotalStudents(data));
  console.log("Submitted Assignments:", getSubmittedAssignments(data));
  console.log("Missing Assignments:", getMissingAssignments(data));
  console.log("Passed Students:", getPassedStudents(data));
  console.log("Students Requiring Revision:", getRevisionStudents(data));
  console.log("Average Score:", getAverageScore(data));
  console.log("Highest Score:", getHighestScore(data));
  console.log("Lowest Score:", getLowestScore(data));
}

printReport(submissions);