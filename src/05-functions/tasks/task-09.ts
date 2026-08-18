/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

type Patient = {
    id: string;
    name: string;
    age: number;
    department: string;
    admitted: boolean;
    bill: number;
};

function getTotalPatients(patients: Patient[]): number {
    return patients.length;
}

function getTotalAdmittedPatients(patients: Patient[]): number {
    return patients.filter(patient => patient.admitted).length;
}

function getTotalDischargedPatients(patients: Patient[]): number {
    return patients.filter(patient => !patient.admitted).length;
}

function getPatientsByDepartment(
    patients: Patient[],
    department: string
): number {
    return patients.filter(
        patient => patient.department === department
    ).length;
}

function getHighestBill(patients: Patient[]): number {
    return Math.max(...patients.map(patient => patient.bill));
}

function getLowestBill(patients: Patient[]): number {
    return Math.min(...patients.map(patient => patient.bill));
}

function getAverageBill(patients: Patient[]): number {
    const totalBill = patients.reduce(
        (total, patient) => total + patient.bill,
        0
    );

    return totalBill / patients.length;
}

function getTotalRevenue(patients: Patient[]): number {
    return patients.reduce(
        (total, patient) => total + patient.bill,
        0
    );
}

function getAdmittedPatientNames(patients: Patient[]): string[] {
    return patients
        .filter(patient => patient.admitted)
        .map(patient => patient.name);
}

function printHospitalReport(patients: Patient[]): void {
    const departments = ["Pediatrics", "Cardiology", "Orthopedics"];

    console.log("===== HOSPITAL DAILY REPORT =====");
    console.log("Total Patients:", getTotalPatients(patients));
    console.log("Total Admitted:", getTotalAdmittedPatients(patients));
    console.log("Total Discharged:", getTotalDischargedPatients(patients));

    console.log("\nPatients by Department:");
    departments.forEach(department => {
        console.log(
            `${department}: ${getPatientsByDepartment(patients, department)}`
        );
    });

    console.log("\nHospital Bills:");
    console.log("Highest Bill:", getHighestBill(patients));
    console.log("Lowest Bill:", getLowestBill(patients));
    console.log("Average Bill:", getAverageBill(patients));
    console.log("Total Revenue:", getTotalRevenue(patients));

    console.log("\nAdmitted Patients:");
    getAdmittedPatientNames(patients).forEach(name => {
        console.log("-", name);
    });
}

printHospitalReport(patients);