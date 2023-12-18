import { student as StudentInterface, student } from "./interfaces";

export class Student implements StudentInterface {
    private _name!: string;
    private _rollno!: number | string;
    private _dept!: string;
    private _fulldetail: Record<string, string | number> = {};
    private _final: Record<string, student> = {};

    constructor(std?: StudentInterface) {
        if (std) {
            this._name = std.name ?? '';
            this._rollno = std.rollno ?? '';
            this._dept = std.dept ?? '';
            this._fulldetail = {
                name: this._name,
                rollno: this._rollno,
                department: this._dept,
            };
            console.log(this._fulldetail);
        }
    }

    // Getter for fulldetail
    get fulldetail(): Record<string, string | number> {
        return this._fulldetail;
    }

    // Setter for final
    set final(m: Record<string, student>) {
        this._final = m;
    }

    // Getter for final
    get final(): Record<string, student> {
        return this._final;
    }
    // Getter for name
    get name(): string | undefined {
        return this._name;
    }

    // Setter for name
    set name(value: string) {
        this._name = value;
    }

    // Getter for rollno
    get rollno(): number | string | undefined {
        return this._rollno;
    }

    // Setter for rollno
    set rollno(value: number | string ) {
        this._rollno = value;
    }

    // Getter for dept
    get dept(): string | undefined {
        return this._dept;
    }

    // Setter for dept
    set dept(value: string) {
        this._dept = value;
    }

    // Method to log student details
    getDetail(std: StudentInterface): void {
        console.log(`Name: ${std.name}`);
        console.log(`Roll No: ${std.rollno}`);
        console.log(`Department: ${std.dept}`);
    }
}
