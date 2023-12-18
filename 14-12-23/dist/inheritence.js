"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.Employee = void 0;
class Employee {
    constructor(id, name, dept) {
        this.empDetails = { name: '', id: 0, dept: '' };
        this.finalRecord = {};
        this._id = id;
        this._name = name;
        this._dept = dept;
    }
    addEmployee(employeeData) {
        var _a, _b, _c;
        if (employeeData) {
            this._id = (_a = employeeData.id) !== null && _a !== void 0 ? _a : this._id;
            this._name = (_b = employeeData.name) !== null && _b !== void 0 ? _b : this._name;
            this._dept = (_c = employeeData.dept) !== null && _c !== void 0 ? _c : this._dept;
        }
        this.empDetails = {
            name: this._name,
            id: this._id,
            dept: this._dept
        };
        const employeeKey = this._name.toLowerCase();
        this.finalRecord[employeeKey] = this.empDetails;
        // console.log(this.final[employeeKey]);
    }
    getDetails(name) {
        let empName = name.toLowerCase();
        console.log(this.finalRecord[empName]);
    }
    get name() {
        return this._name;
    }
    get id() {
        return this._id;
    }
    get dept() {
        return this._dept;
    }
}
exports.Employee = Employee;
class Manager extends Employee {
    constructor(id, name, dept, managerPost) {
        super(id, name, dept);
        this._managerPost = managerPost;
    }
    get managerPost() {
        return this._managerPost;
    }
}
exports.Manager = Manager;
// Create Manager instance
const managerInstance = new Manager(101, "virat", "it", "hr");
// Call addEmployee separately after creating the Manager instance
managerInstance.addEmployee({ id: 102, name: "raj", dept: "IT" });
managerInstance.addEmployee({ id: 101, name: "rajkumar", dept: "mca" });
managerInstance.getDetails('rajkumar');
console.log(managerInstance.managerPost);
