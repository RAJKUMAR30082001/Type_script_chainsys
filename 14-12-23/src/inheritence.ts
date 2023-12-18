import { employees, manager } from './interface';

export class Employee implements employees {
    private _name!: string;
    private _id!: number;
    private _dept!: string;
    public empDetails: employees = { name: '', id: 0, dept: '' };
    public finalRecord: Record<string, employees> = {};

    constructor(id: number, name: string, dept: string) {
        this._id = id;
        this._name = name;
        this._dept = dept;
    }

    addEmployee(employeeData?: employees): void {
        if (employeeData) {
            this._id = employeeData.id ?? this._id;
            this._name = employeeData.name ?? this._name;
            this._dept = employeeData.dept ?? this._dept;
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

    getDetails(name: string): void {
        let empName = name.toLowerCase();
        console.log(this.finalRecord[empName]);
    }

    get name(): string {
        return this._name;
    }

    get id(): number {
        return this._id;
    }

    get dept(): string {
        return this._dept;
    }
}

export class Manager extends Employee implements manager {
    private _managerPost!: string; 

    constructor(id: number, name: string, dept: string, managerPost: string) {
        super(id, name, dept);
        this._managerPost = managerPost;
    }

    get managerPost(): string {
        return this._managerPost;
    }
}

// Create Manager instance
const managerInstance: Manager = new Manager(101, "virat", "it", "hr");

// Call addEmployee separately after creating the Manager instance
managerInstance.addEmployee({ id: 102, name: "raj", dept: "IT" });
managerInstance.addEmployee({ id: 101, name: "rajkumar", dept: "mca" });
managerInstance.getDetails('rajkumar');

console.log(managerInstance.managerPost);

