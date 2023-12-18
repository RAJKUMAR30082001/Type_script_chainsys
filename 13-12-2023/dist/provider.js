"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(std) {
        var _a, _b, _c;
        this._fulldetail = {};
        this._final = {};
        if (std) {
            this._name = (_a = std.name) !== null && _a !== void 0 ? _a : '';
            this._rollno = (_b = std.rollno) !== null && _b !== void 0 ? _b : '';
            this._dept = (_c = std.dept) !== null && _c !== void 0 ? _c : '';
            this._fulldetail = {
                name: this._name,
                rollno: this._rollno,
                department: this._dept,
            };
            console.log(this._fulldetail);
        }
    }
    // Getter for fulldetail
    get fulldetail() {
        return this._fulldetail;
    }
    // Setter for final
    set final(m) {
        this._final = m;
    }
    // Getter for final
    get final() {
        return this._final;
    }
    // Getter for name
    get name() {
        return this._name;
    }
    // Setter for name
    set name(value) {
        this._name = value;
    }
    // Getter for rollno
    get rollno() {
        return this._rollno;
    }
    // Setter for rollno
    set rollno(value) {
        this._rollno = value;
    }
    // Getter for dept
    get dept() {
        return this._dept;
    }
    // Setter for dept
    set dept(value) {
        this._dept = value;
    }
    // Method to log student details
    getDetail(std) {
        console.log(`Name: ${std.name}`);
        console.log(`Roll No: ${std.rollno}`);
        console.log(`Department: ${std.dept}`);
    }
}
exports.Student = Student;
