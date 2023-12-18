import { Student } from "./provider";
import { student } from "./interfaces";

// Arrays containing student information
const names: string[] = ['raj', 'kumar', 'raina', 'viart'];
const rollNumbers: Array<number | string> = [1234, '123p', 5678, '90ijk'];
const departments: string[] = ['mca', 'EEE', 'mech', 'mca'];

// Record to store student objects
const studentsRecord: Record<string, student> = {};

// Create student objects and populate the record
for (let i = 0; i < names.length; i++) {
    const studentInstance: Student = new Student({ name: names[i], rollno: rollNumbers[i], dept: departments[i] });
    studentsRecord[names[i]] = studentInstance;
}

// Log the student details
const studentInstance: Student = new Student();
for (let studentName in studentsRecord) {
    studentInstance.getDetail(studentsRecord[studentName]);
}


