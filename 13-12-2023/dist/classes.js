"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const provider_1 = require("./provider");
// Arrays containing student information
const names = ['raj', 'kumar', 'raina', 'viart'];
const rollNumbers = [1234, '123p', 5678, '90ijk'];
const departments = ['mca', 'EEE', 'mech', 'mca'];
// Record to store student objects
const studentsRecord = {};
// Create student objects and populate the record
for (let i = 0; i < names.length; i++) {
    const studentInstance = new provider_1.Student({ name: names[i], rollno: rollNumbers[i], dept: departments[i] });
    studentsRecord[names[i]] = studentInstance;
}
// Log the student details
const studentInstance = new provider_1.Student();
for (let studentName in studentsRecord) {
    studentInstance.getDetail(studentsRecord[studentName]);
}
