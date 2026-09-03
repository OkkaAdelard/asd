/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
];

const employeeAverages = employees.map(employee => ({
    name: employee.name,
    averageScore:
        employee.projects.reduce((sum, project) => sum + project.score, 0) /
        employee.projects.length
}));

const above85 = employeeAverages.filter(
    employee => employee.averageScore > 85
);

const below80 = employees.filter(employee =>
    employee.projects.some(project => project.score < 80)
);

console.log("Average Scores:", employeeAverages);
console.log("Average Score Above 85:", above85);
console.log("Employees With Score Below 80:", below80);